import './styles/styles.css';
import initialCardsRender from './modules/initialCardsRender';
import switchMode from './modules/switchMode';
import startGame from './modules/startGame';
import toMainHandler from './modules/toMainHandler';


initialCardsRender();

const toMainButton = document.querySelector('.button_to-main-page');
toMainButton.addEventListener('click', toMainHandler);

const gameModeButton = document.querySelector('.button_game-mode');
gameModeButton.addEventListener('click', switchMode);

const startGameButton = document.querySelector('.button_start-game');
startGameButton.addEventListener('click', startGame);
