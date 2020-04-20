import renderCards from './renderCards';
import initialCardsRender from './initialCardsRender';

export default function startGame(event) {
  event.preventDefault();

  if (!event.target.closest('.card')) return;

  const target = event.target.closest('.card_main-page');

  if (target) {
    const cardsCollection = document.querySelectorAll('.card_main-page');
    const index = Array.from(cardsCollection).indexOf(target);

    renderCards(index + 1);
  }

  const toMainButton = document.querySelector('.button_to-main-page');
  const startButton = document.querySelector('.button_start-game');
  toMainButton.hidden = false;

  const toMainHandler = () => {
    initialCardsRender();
    toMainButton.hidden = true;
    startButton.style.display = 'none';
  };

  toMainButton.addEventListener('click', toMainHandler);

  // const cards = document.querySelector('.cards');
  // cards.removeEventListener('click', startGame);
}
