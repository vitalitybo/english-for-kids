import cards from './cards';
import { states } from './statesObj';
import cardsClickHandler from './cardsClickHandler';
import setPlayGamePage from './setPlayGamePage';


export default function initialCardsRender() {
  const CARD_CATEGORIES = cards[0];

  if (document.querySelector('.cards')) {
    document.querySelector('.cards').remove();
  }

  const cardsElement = document.createElement('section');
  cardsElement.classList.add('cards');
  document.querySelector('.button__container').before(cardsElement);
  cardsElement.addEventListener('click', setPlayGamePage);
  cardsElement.addEventListener('click', cardsClickHandler);

  const cardsCollection = Array.from(document.querySelectorAll('.card'));
  let gameModeClass = '';

  if (document.querySelector('.stars-block')) {
    document.querySelector('.stars-block').remove();
  }

  if (cardsCollection.length) {
    cardsCollection.forEach((item) => item.remove());
  }

  if (!states.trainingMode) {
    gameModeClass = 'card_main-page_play-mode';
  }

  for (let i = 0; i < CARD_CATEGORIES.length; i += 1) {
    cardsElement.innerHTML += `
      <figure class="card card_main-page ${gameModeClass}">
        <img src="./assets/${cards[i + 1][0].image}" alt="${cards[i + 1][0].word}" class="card__image card__image_main-page">
        <figcaption class="card__title">${cards[0][i]}</figcaption>
      </figure>`;
  }
}
