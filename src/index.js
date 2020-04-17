import './styles/styles.css';
import initialCardsRender from './modules/initialCardsRender';
import startGame from './modules/startGame';
import trainingMode from './modules/isTrainingMode';

// let isPlayMode = false;

initialCardsRender();

const cardsElement = document.querySelector('.cards');
cardsElement.addEventListener('click', startGame);

const gm = document.querySelector('.button_game-mode');
gm.addEventListener('click', () => {
  trainingMode.trainingMode = !trainingMode.trainingMode;
  console.log(trainingMode);
});
