import cards from './cards';
import rotateCard from './rotateCard';
import gameMode from './isTrainingMode';

export default function renderCards(index = 0) {
  const cardsElement = document.querySelector('.cards');
  const cardsCollection = document.querySelectorAll('.card');
  let playingClass = 'card_playing';
  let cardFooterPlayModeClass = 'card__footer_play-mode';

  const CARDS_CATEGORY_LENGTH = cards[index].length;

  if (gameMode.trainingMode) {
    playingClass = '';
    cardFooterPlayModeClass = '';
  } else {
    playingClass = 'card_playing';
    cardFooterPlayModeClass = 'card__footer_play-mode';
  }

  if (cardsCollection.length) {
    cardsCollection.forEach((item) => item.remove());
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

  const cardsHandler = (event) => {
    event.preventDefault();
  };

  cardsElement.addEventListener('click', cardsHandler);

  const rotateButtons = document.querySelectorAll('.rotate-button');
  rotateButtons.forEach((button) => {
    button.addEventListener('click', rotateCard);
  });
}
