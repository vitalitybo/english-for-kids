import cards from './modules/cards';

const images = document.querySelectorAll('.card__image');
const titles = document.querySelectorAll('.card__title');

for (let [index, title] of Object.entries(titles)) {
  title.innerHTML = cards[0][+index];
}

for (let [index, image] of Object.entries(images)) {
  if (!cards[+index + 1]) break;
  image.src = `./assets/${cards[+index + 1][+index].image}`;
  image.alt = cards[+index + 1][+index].word;
}

const cardss = document.querySelector('.cards');

cardss.addEventListener('click', startGame);

function startGame(event) {
  event.preventDefault();

  if (!event.target.closest('.card')) return;
  
  const cardsCollection = document.querySelectorAll('.card');
  const index = Array.from(cardsCollection).indexOf(target);

  window.localStorage.setItem('index', index);
  window.location.href('./cards.html');
}

function playAudio() {
  const cardsCollection = document.querySelectorAll('.card');

  const target = event.target.closest('.card');
  const index = Array.from(cardsCollection).indexOf(target);

  const audio = new Audio(`./assets/${cards[+index + 1][+index].audioSrc}`);

  audio.play();
}