import { states, statistic } from './statesObj';
import cards from './cards';
import addStar from './addStar';
import initialCardsRender from './initialCardsRender';
import wipeCurrentProgress from './wipeCurrentProgress';

export default function startGame() {
  if (!states.started) {
    wipeCurrentProgress();
    states.started = true;
  } else {
    return;
  }

  const correctAnswerAudio = new Audio('./assets/audio/correct.mp3');
  const errorAnswerAudio = new Audio('./assets/audio/error.mp3');

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const { targetCollection } = states;
  const currentCollection = shuffleArray(cards[targetCollection].slice(0));

  const playSound = () => {
    if (targetCollection !== states.targetCollection) return;
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

    document.querySelector('.button__container').classList.add('button_training-mode');
    document.querySelector('.main').append(result);
    result.append(resultStatistic);
    result.append(resultImage);

    const toMainButton = document.querySelector('.button_to-main-page');
    toMainButton.hidden = true;

    initialCardsRender();

    const startGameButton = document.querySelector('.button_start-game');
    startGameButton.addEventListener('click', startGame);

    states.started = false;
    statistic.correctAnswersCount = 0;
    statistic.incorrectAnswersCount = 0;

    setTimeout(() => {
      result.remove();
    }, 3000);
  };

  const checkCard = (event) => {
    if (states.isRestarted) {
      document.querySelector('.cards').removeEventListener('click', checkCard);
      // wipeCurrentProgress();
      states.isRestarted = false;
      return;
    }

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

  // const restart = () => {
  //   wipeCurrentProgress();
  //   document.querySelector('.cards').removeEventListener('click', checkCard);
  // };

  playSound();


  // if (states.isRestarted) {
  //   wipeCurrentProgress();
  //   states.isRestarted = false;
  //   states.isCheckListenerOn = true;
  // }

  const starsBlock = document.createElement('div');
  starsBlock.classList.add('stars-block');
  document.querySelector('.main').prepend(starsBlock);

  // const cardsBlocker = document.createElement('div');
  // cardsBlocker.classList.add('cards-blocker');

  // document.querySelector('.cards').prepend(cardsBlocker);

  document.querySelector('.button_start-game').classList.add('button_start-game-repeat');
  document.querySelector('.button_start-game').addEventListener('click', playSound);
  document.querySelector('.cards').addEventListener('click', checkCard);
}
