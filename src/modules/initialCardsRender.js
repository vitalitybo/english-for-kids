import cards from './cards';
import startGame from './startGame';

export default function initialCardsRender() {
  const CARD_CATEGORIES = cards[0];

  const cardsElement = document.querySelector('.cards');
  const cardsCollection = Array.from(document.querySelectorAll('.card'));

  if (cardsCollection.length) {
    cardsCollection.forEach((item) => item.remove());
  }

  for (let i = 0; i < CARD_CATEGORIES.length; i += 1) {
    cardsElement.innerHTML += `
      <figure class="card card_main-page">
        <img src="./assets/${cards[i + 1][0].image}" alt="${cards[i + 1][0].word}" class="card__image card__image_main-page">
        <figcaption class="card__title">${cards[0][i]}</figcaption>
      </figure>`;
  }

  cardsElement.addEventListener('click', startGame);
}
