import { states } from './statesObj';

export default function switchMode() {
  const playCardsFooter = document.querySelectorAll('.card__footer');
  const cardsCollection = document.querySelectorAll('.card');
  const startButton = document.querySelector('.button_start-game');

  states.trainingMode = !states.trainingMode;
  states.started = false;

  console.log(states.trainingMode);
  if (playCardsFooter.length) {
    if (!states.trainingMode) {
      playCardsFooter.forEach((card) => card.classList.add('card__footer_play-mode'));

      cardsCollection.forEach((card) => {
        card.classList.add('card_playing');
      });

      startButton.classList.remove('button_training-mode');
    } else {
      playCardsFooter.forEach((card) => card.classList.remove('card__footer_play-mode'));
      cardsCollection.forEach((card) => {
        card.classList.remove('card_playing');
      });
      startButton.classList.add('button_training-mode');
    }
  }

  if (states.trainingMode) {
    states.locked = false;
    document.querySelectorAll('.card_main-page').forEach((card) => card.classList.remove('card_main-page_play-mode'));
  } else {
    states.locked = true;
    document.querySelectorAll('.card_main-page').forEach((card) => card.classList.add('card_main-page_play-mode'));
  }
}
