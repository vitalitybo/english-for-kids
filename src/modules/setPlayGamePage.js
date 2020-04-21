import renderCards from './renderCards';
import initialCardsRender from './initialCardsRender';
import statesObj from './statesObj';

export default function startGame(event) {
  event.preventDefault();

  if (!event.target.closest('.card_main-page')) return;

  const target = event.target.closest('.card_main-page');

  if (target) {
    const cardsCollection = document.querySelectorAll('.card_main-page');
    const index = Array.from(cardsCollection).indexOf(target);
    statesObj.targetCollection = index + 1;

    renderCards(index + 1);
  }

  const toMainButton = document.querySelector('.button_to-main-page');
  const startButton = document.querySelector('.button_start-game');
  toMainButton.hidden = false;

  const toMainHandler = () => {
    initialCardsRender();
    toMainButton.hidden = true;
    startButton.classList.add('button_training-mode');

    toMainButton.removeEventListener('click', toMainHandler);
  };

  toMainButton.addEventListener('click', toMainHandler);
}
