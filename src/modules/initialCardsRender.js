import cards from './cards';
import { states } from './statesObj';
// import cardsClickHandler from './cardsClickHandler';
import setPlayGamePage from './setPlayGamePage';
import wipeCurrentProgress from './wipeCurrentProgress';
import createCardsSection from './createCardsSection';


export default function initialCardsRender() {
  if (document.querySelector('.card_main-page')) return;
  wipeCurrentProgress();

  const CARD_CATEGORIES = cards[0];

  if (document.querySelector('.cards')) {
    document.querySelector('.cards').remove();
  }

  createCardsSection();
  const cardsElement = document.querySelector('.cards');
  cardsElement.addEventListener('click', setPlayGamePage);

  const cardsCollection = Array.from(document.querySelectorAll('.card'));
  let gameModeClass = '';

  if (cardsCollection.length) {
    cardsCollection.forEach((item) => item.remove());
  }

  if (!states.trainingMode) {
    gameModeClass = 'card_main-page_play-mode';
  }

  for (let i = 0; i < CARD_CATEGORIES.length; i += 1) {
    cardsElement.innerHTML += `
      <figure class="card card_main-page ${gameModeClass}">
        <div class="card__image-wrapper">
          <img src="./assets/${cards[i + 1][0].image}" alt="${cards[i + 1][0].word}" class="card__image card__image_main-page">
        </div>
        <figcaption class="card__title">${cards[0][i]}</figcaption>
      </figure>`;
  }

  const toMainButton = document.querySelector('.button_to-main-page');
  toMainButton.hidden = true;
  const startButton = document.querySelector('.button__container');
  startButton.classList.add('button_training-mode');
}
