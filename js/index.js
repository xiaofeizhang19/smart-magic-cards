const suit = ['hearts', 'spades', 'diamonds', 'clubs'];
const cardsWrapper = document.querySelector('.cards-wrapper');

function createCards() {
  const cards = [];
  // Create an array with objects containing the value and the suit of each card
  for (let i = 1; i <= 52; i += 1) {
    const cardObject = {
      value: i % 13 === 0 ? 13 : i % 13,
      suit: suit[Math.floor((i - 1)/ 13)],
    };
    cards.push(cardObject);
  }

  // For each dataObject, create a new card and append it to the DOM
  cards.forEach((card, i) => {
    const positionFromLeft = i * 22;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}

// Function to clear out the initial button and create new buttons to play the game.
const startButton = document.getElementById('start-game');
function createButtons() {
  // Your Code
  console.log(startButton)
  startButton.style.dislay = "none";
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
}

document.getElementById('start-game').addEventListener('click', startGame);
