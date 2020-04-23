// import setPlayGamePage from './setPlayGamePage';
import cardsClickHandler from './cardsClickHandler';

export default function createCardsSection() {
  const cardsElement = document.createElement('section');
  cardsElement.classList.add('cards');
  document.querySelector('.main').prepend(cardsElement);
  cardsElement.addEventListener('click', cardsClickHandler);
}
