const suit = ['hearts', 'spades', 'diamonds', 'clubs'];
const cardsWrapper = document.querySelector('.cards-wrapper');
const cardSpacing = 20;

function createCards() {
  const cards = [];
  // Create an array with objects containing the value and the suit of each card
  for (let i = 0; i < 52; i += 1) {
    const cardObject = {
      value: (i % 13) + 1,
      suit: suit[Math.floor(i / 13)],
    };
    cards.push(cardObject);
  }

  // For each dataObject, create a new card and append it to the DOM
  cards.forEach((card, i) => {
    const positionFromLeft = i * cardSpacing;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('suit', card.suit);
    cardElement.setAttribute('data-value', card.value);
    cardElement.setAttribute('sorted-pos', i);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}

// Function to clear out the initial button and create new buttons to play the game.
function createButtons() {
  // Your Code
  const startButton = document.getElementById('start-game');
  const gameButtons = document.getElementById('buttons');
  startButton.style.display = "none";
  gameButtons.style.display = "block";
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
}

function shuffleCards() {
  let length = cardsWrapper.childElementCount;
  for (let i = length; i > 0; i--) {
    let j = Math.floor(Math.random() * length) + 1;
    if (i !== j) {
      swap(cardsWrapper.childNodes[i], cardsWrapper.childNodes[j]);
      fixPadding(i);
      fixPadding(j);
    }
  }
}

function swap(cardA, cardB) {
  let temp = document.createElement("div");

  cardsWrapper.insertBefore(temp, cardA);
  cardsWrapper.insertBefore(cardA, cardB);
  cardsWrapper.insertBefore(cardB, temp);
  cardsWrapper.removeChild(temp);
}

function fixPadding(index) {
  cardsWrapper.childNodes[index].style.left = `${(index - 1) * cardSpacing}px`;
}

function toggleHideAndShow() {
  let length = cardsWrapper.childElementCount;
  for (let i = 1; i <= length; i++) {
    let card = cardsWrapper.childNodes[i];
    if (card.classList.contains('hidden')) {
      card.className = "";
      const suit = card.getAttribute('suit');
      const value = card.getAttribute('data-value');
      card.classList.add('card', `${suit}-${value}`);
    } else {
      card.className = "";
      card.classList.add('hidden', 'card');
    }
  }
}

function sortCards() {

}

document.getElementById('start-game').addEventListener('click', startGame);
document.getElementById('shuffle').addEventListener('click', shuffleCards);
document.getElementById('show-hide').addEventListener('click', toggleHideAndShow)
document.getElementById('magic').addEventListener('click', sortCards);
