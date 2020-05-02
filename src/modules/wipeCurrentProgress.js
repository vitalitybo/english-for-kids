import { statistic } from './statesObj';
import startGame from './startGame';

export default function wipeCurrentProgress() {
  // const cardsBlocker = document.querySelector('.cards-blocker');

  // states.started = false;
  statistic.correctAnswersCount = 0;
  statistic.incorrectAnswersCount = 0;

  if (document.querySelector('.stars-block')) {
    document.querySelector('.stars-block').remove();

    // const starsBlock = document.createElement('div');
    // starsBlock.classList.add('stars-block');
    // document.querySelector('.main').prepend(starsBlock);
  }

  // if (cardsBlocker) {
  //   cardsBlocker.remove();
  // }

  document.querySelectorAll('.image-blocker').forEach((card) => {
    card.remove();
  });

  document.querySelector('.button_start-game').remove();
  document.querySelector('.button__container').insertAdjacentHTML('afterbegin',
    '<button class="button button_start-game"></button>');
  document.querySelector('.button_start-game').addEventListener('click', startGame);
}
