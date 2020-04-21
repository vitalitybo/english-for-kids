import statesObj from './statesObj';
import cards from './cards';

export default function startGame() {
  const correctAnswerAudio = new Audio('./assets/audio/correct.mp3');
  const errorAnswerAudio = new Audio('./assets/audio/error.mp3');

  if (!statesObj.started) statesObj.started = true;

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const currentCollection = shuffleArray(cards[statesObj.targetCollection].slice(0));

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

  const checkCard = (event) => {
    const targetImage = event.target.closest('.card__image');

    if (targetImage) {
      if (targetImage.alt === currentCollection[currentCollection.length - 1].word) {
        correctAnswerAudio.play();
        blockCorrectImage(targetImage);
        currentCollection.pop();

        if (!currentCollection.length) {
          document.querySelector('.cards').removeEventListener('click', checkCard);
          return;
        }

        playSound();
      } else if (targetImage) {
        errorAnswerAudio.play();
      }
    }
  };

  playSound();
  document.querySelector('.cards').addEventListener('click', checkCard);
}
