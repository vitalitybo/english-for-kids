import cards from './cards';

// let isRendered = false;

export default function renderCards(index = 0) {
  const cardsElement = document.querySelector('.cards');
  const CARDS_CATEGORY_LENGTH = cards[index].length;
  const cardsCollection = Array.from(document.querySelectorAll('.card'));

  if (cardsCollection.length) {
    cardsCollection.forEach((item) => item.remove());
  }

  for (let i = 0; i < CARDS_CATEGORY_LENGTH; i += 1) {
    // if (!isRendered) {
    //   cardsElement.innerHTML += `
    //   <figure class="card">
    //     <img src="./assets/${cards[i + 1][0].image}"
    //  alt="${cards[i + 1][0].word}" class="card__image">
    //     <figcaption class="card__title">${cards[0][i]}</figcaption>
    //   </figure>`;
    // } else {
    cardsElement.innerHTML += `
      <figure class="card">
        <div class"card__back">
          <img src="./assets/${cards[index][i].image}" alt="${cards[index][i].word}" class="card__image">
        </div>
        <div class"card__front">
          <img src="./assets/${cards[index][i].image}" alt="${cards[index][i].word}" class="card__image">
          <figcaption class="card__title">${cards[index][i].translation}</figcaption>
        </div>
      </figure>`;
    // }
  }

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
