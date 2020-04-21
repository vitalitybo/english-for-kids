import './styles/styles.css';
import initialCardsRender from './modules/initialCardsRender';
import setPlayGamePage from './modules/setPlayGamePage';
import switchMode from './modules/switchMode';
import cardsClickHandler from './modules/cardsClickHandler';
import startGame from './modules/startGame';


initialCardsRender();

const cardsElement = document.querySelector('.cards');
cardsElement.addEventListener('click', setPlayGamePage);
cardsElement.addEventListener('click', cardsClickHandler);

const gameModeButton = document.querySelector('.button_game-mode');
gameModeButton.addEventListener('click', switchMode);

const startGameButton = document.querySelector('.button_start-game');
startGameButton.addEventListener('click', startGame);
