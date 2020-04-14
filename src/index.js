// import cards from './modules/cards';
import './styles/styles.css';
import renderCards from './modules/renderCards';

renderCards();

const cardss = document.querySelector('.cards');

function startGame(event) {
  event.preventDefault();

  if (!event.target.closest('.card')) return;

  const target = event.target.closest('.card');
  const cardsCollection = document.querySelectorAll('.card');
  const index = Array.from(cardsCollection).indexOf(target);

  window.localStorage.setItem('index', index);
  window.location.href = './cards.html';
}

cardss.addEventListener('click', startGame);

// function playAudio(event) {
//   const cardsCollection = document.querySelectorAll('.card');

//   const target = event.target.closest('.card');
//   const index = Array.from(cardsCollection).indexOf(target);

//   const audio = new Audio(`./assets/${cards[+index + 1][+index].audioSrc}`);

//   audio.play();
// }
