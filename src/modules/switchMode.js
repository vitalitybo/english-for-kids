import mode from './isTrainingMode';

export default function switchMode() {
  const playCardsFooter = document.querySelectorAll('.card__footer');
  const cardsCollection = document.querySelectorAll('.card');
  const startButton = document.querySelector('.button_start-game');

  mode.trainingMode = !mode.trainingMode;

  console.log(mode.trainingMode);
  if (playCardsFooter.length) {
    if (!mode.trainingMode) {
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

  if (mode.trainingMode) {
    document.querySelectorAll('.card_main-page').forEach((card) => card.classList.remove('card_main-page_play-mode'));
  } else {
    document.querySelectorAll('.card_main-page').forEach((card) => card.classList.add('card_main-page_play-mode'));
  }
}
