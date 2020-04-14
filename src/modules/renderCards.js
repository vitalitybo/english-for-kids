import cards from './cards';

export default function renderCards() {
  const cardsElement = document.querySelector('.cards');
  const CARDS_CATEGORY_LENGTH = cards[0].length;

  for (let i = 0; i < CARDS_CATEGORY_LENGTH; i += 1) {
    cardsElement.innerHTML += `
    <figure class="card">
      <img src="./assets/${cards[i + 1][0].image}" alt="${cards[i + 1][0].word}" class="card__image">
      <h3 class="card__title">${cards[0][i]}</h3>
    </figure>`;
  }

  // const images = document.querySelectorAll('.card__image');
  // const titles = document.querySelectorAll('.card__title');


  // titles.forEach((item, index) => {
  //   item.innerHTML = cards[0][+index];
  // });

  // images.forEach((item, index) => {
  //   if (!cards[+index + 1]) return;

  //   item.src = `./assets/${cards[+index + 1][+index].image}`;
  //   item.alt = cards[+index + 1][+index].word;
  // });
}
