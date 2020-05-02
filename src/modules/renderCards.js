import cards from './cards';
import { states } from './statesObj';
import wipeCurrentProgress from './wipeCurrentProgress';
import createCardsSection from './createCardsSection';
import startGame from './startGame';

export default function renderCards(index = 0) {
  wipeCurrentProgress();
  states.started = false;

  if (document.querySelector('.cards')) {
    document.querySelector('.cards').remove();
  }

  createCardsSection();
  const cardsElement = document.querySelector('.cards');
  // const cardsElement = document.querySelector('.cards');
  // const cardsCollection = document.querySelectorAll('.card');
  let playingClass = 'card_playing';
  let cardFooterPlayModeClass = 'card__footer_play-mode';
  const startButton = document.querySelector('.button__container');
  const CARDS_CATEGORY_LENGTH = cards[index].length;
  const toMainButton = document.querySelector('.button_to-main-page');

  document.querySelector('.button_start-game').addEventListener('click', startGame);

  toMainButton.hidden = false;
  states.targetCollection = index;

  if (states.trainingMode) {
    playingClass = '';
    cardFooterPlayModeClass = '';
  } else {
    startButton.classList.remove('button_training-mode');
    playingClass = 'card_playing';
    cardFooterPlayModeClass = 'card__footer_play-mode';
  }


  for (let i = 0; i < CARDS_CATEGORY_LENGTH; i += 1) {
    cardsElement.innerHTML += `
      <figure class="card card_play-mode ${playingClass}">
        <div class="card__back">
          <img src="./assets/${cards[index][i].image}" alt="${cards[index][i].word}" class="card__image">
          <footer class="card__footer ${cardFooterPlayModeClass}">
            <button class="rotate-button"></button>
            <figcaption class="card__title">${cards[index][i].word}</figcaption>
          </footer>
        </div>
        <div class="card__front">
          <img src="./assets/${cards[index][i].image}" alt="${cards[index][i].word}" class="card__image">
          <footer class="card__footer ${cardFooterPlayModeClass}">
           <figcaption class="card__title">${cards[index][i].translation}</figcaption>
          </footer>
        </div>
      </figure>`;
  }
}
