// Variables containing button and grid from HTML
const fourCardButton = document.querySelector("#four-cards-button");
const cardContainer = document.querySelector("#card-container");

// Array containing images
const imgArr = ["url('/images/fish.jpg')", "url('/images/cat.jpg')"];

// Function which runs when user clicks "new game"
const generateCards = () => {
  // While loop to remove all divs from previous game
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }

  // Create a new array with each image from the imgArr x2.
  randomImgArr = [];
  imgArr.forEach((image) => {
    // Add the image twice
    randomImgArr.push(image, image);
  });

  // Shuffle the randomImgArr
  for (let i = randomImgArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomImgArr[i], randomImgArr[j]] = [randomImgArr[j], randomImgArr[i]];
  }

  // Create a div, give it a random background image from the randomImgArr, append it to the cardContainer
  randomImgArr.forEach((image) => {
    const card = document.createElement("div");
    card.className = "card";

    // cardInner
    const cardInner = document.createElement("div");
    cardInner.className = "cardInner";

    // cardBack
    const cardBack = document.createElement("div");
    cardBack.className = "cardBack";
    cardBack.textContent = "?";

    // cardFront
    const cardFront = document.createElement("div");
    cardFront.className = "cardFront";
    cardFront.style.backgroundImage = image;

    cardInner.append(cardFront, cardBack);
    card.append(cardInner);
    cardContainer.append(card);
  });
};

fourCardButton.addEventListener("click", () => {
  generateCards();
});

// While loop to fill up the array of images ?
