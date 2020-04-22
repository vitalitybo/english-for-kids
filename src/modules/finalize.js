// import initialCardsRender from './initialCardsRender';

export default function () {
  const result = document.createElement('div');
  result.classList.add('result');

  const resultImage = document.createElement('div');
  resultImage.classList.add('result-image');

  const resultStatistic = document.createElement('strong');
  resultStatistic.classList.add('result-statistic');

  if (statistic.incorrectAnswersCount) {
    resultImage.classList.add('result-image_failure');
    resultStatistic.innerHTML = `:( Incorrect answers: ${statistic.incorrectAnswersCount}`;

    new Audio('./assets/audio/failure.mp3').play();
  } else {
    resultImage.classList.add('result-image_win');
    resultStatistic.innerHTML = `WIN! Incorrect answers: ${statistic.incorrectAnswersCount}`;

    new Audio('./assets/audio/success.mp3').play();
  }

  document.querySelector('.button_start-game').classList.add('button_training-mode');
  document.querySelector('.main').append(result);
  result.append(resultStatistic);
  result.append(resultImage);

  const toMainButton = document.querySelector('.button_to-main-page');
  toMainButton.hidden = true;

  initialCardsRender();

  setTimeout(() => {
    result.remove();
  }, 3000);
}
