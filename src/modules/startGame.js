import renderCards from './renderCards';

export default function startGame(event) {
  event.preventDefault();

  if (!event.target.closest('.card')) return;

  const target = event.target.closest('.card');
  const cardsCollection = document.querySelectorAll('.card');
  const index = Array.from(cardsCollection).indexOf(target);

  renderCards(index + 1);

  const cards = document.querySelector('.cards');
  cards.removeEventListener('click', startGame);
}
