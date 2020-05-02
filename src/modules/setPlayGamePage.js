import renderCards from './renderCards';
// import { states } from './statesObj';

export default function setPlayGamePage(event) {
  event.preventDefault();

  if (!event.target.closest('.card_main-page')) return;

  const target = event.target.closest('.card_main-page');

  if (target) {
    const cardsCollection = document.querySelectorAll('.card_main-page');
    const index = Array.from(cardsCollection).indexOf(target);
    // states.targetCollection = index + 1;

    renderCards(index + 1);
  }
}
