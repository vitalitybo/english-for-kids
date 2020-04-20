import './styles/styles.css';
import initialCardsRender from './modules/initialCardsRender';
import startGame from './modules/startGame';
import switchMode from './modules/switchMode';

initialCardsRender();

const cardsElement = document.querySelector('.cards');
cardsElement.addEventListener('click', startGame);

const gm = document.querySelector('.button_game-mode');
gm.addEventListener('click', switchMode);
