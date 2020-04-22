import { states, statistic } from './statesObj';
import cards from './cards';
import addStar from './addStar';
import initialCardsRender from './initialCardsRender';

export default function startGame() {
  const correctAnswerAudio = new Audio('./assets/audio/correct.mp3');
  const errorAnswerAudio = new Audio('./assets/audio/error.mp3');

  const starsBlock = document.createElement('div');
  starsBlock.classList.add('stars-block');
  document.querySelector('.main').prepend(starsBlock);

  if (!states.started) states.started = true;

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const currentCollection = shuffleArray(cards[states.targetCollection].slice(0));

  const playSound = () => {
    setTimeout(() => {
      new Audio(`./assets/${currentCollection[currentCollection.length - 1].audioSrc}`).play();
    }, 300);
  };

  const blockCorrectImage = (targetImage) => {
    const blocker = document.createElement('div');
    blocker.classList.add('image-blocker');
    targetImage.parentElement.append(blocker);
  };

  const finalize = () => {
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
  };

  const checkCard = (event) => {
    const targetImage = event.target.closest('.card__image');

    if (targetImage) {
      if (targetImage.alt === currentCollection[currentCollection.length - 1].word) {
        correctAnswerAudio.play();

        addStar('correct');
        blockCorrectImage(targetImage);
        currentCollection.pop();
        statistic.correctAnswersCount += 1;

        if (!currentCollection.length) {
          document.querySelector('.cards').removeEventListener('click', checkCard);
          finalize();
          return;
        }

        playSound();
      } else if (targetImage) {
        errorAnswerAudio.play();
        statistic.incorrectAnswersCount += 1;

        addStar('incorrect');
      }
    }
  };

  playSound();
  document.querySelector('.button_start-game').removeEventListener('click', startGame);
  document.querySelector('.cards').addEventListener('click', checkCard);
}
