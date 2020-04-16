import cards from './cards';
import rotateCard from './rotateCard';

export default function renderCards(index = 0) {
  const cardsElement = document.querySelector('.cards');
  const CARDS_CATEGORY_LENGTH = cards[index].length;
  const cardsCollection = Array.from(document.querySelectorAll('.card'));
  const rotateButtonHTML = '<button class="rotate-button"></button>';

  // if (isTrainingMode) {
  // rotateButtonHTML = '<button class="rotate-button" onclick="rotate()"></button>';
  // } else {
  //   rotateButtonHTML = '';
  // }

  if (cardsCollection.length) {
    cardsCollection.forEach((item) => item.remove());
  }

  for (let i = 0; i < CARDS_CATEGORY_LENGTH; i += 1) {
    cardsElement.innerHTML += `
      <figure class="card">
        <div class="card__back">
          <img src="./assets/${cards[index][i].image}" alt="${cards[index][i].word}" class="card__image">
          ${rotateButtonHTML}
          <figcaption class="card__title" hidden>${cards[index][i].word.toUpperCase()}</figcaption>
        </div>
        <div class="card__front">
          <img src="./assets/${cards[index][i].image}" alt="${cards[index][i].word}" class="card__image">
          <figcaption class="card__title">${cards[index][i].translation.toUpperCase()}</figcaption>
        </div>
      </figure>`;
  }

  const rotateButtons = document.querySelectorAll('.rotate-button');
  rotateButtons.forEach((button) => {
    button.addEventListener('click', rotateCard);
  });

  // isRendered = true;
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
