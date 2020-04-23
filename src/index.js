import './styles/styles.css';
import initialCardsRender from './modules/initialCardsRender';
import switchMode from './modules/switchMode';
import startGame from './modules/startGame';
import toMainHandler from './modules/toMainHandler';
import setSidebarMenu from './modules/setSidebarMenu';

initialCardsRender();
setSidebarMenu();

const toMainButton = document.querySelector('.button_to-main-page');
toMainButton.addEventListener('click', toMainHandler);

const gameModeButton = document.querySelector('.button_game-mode');
gameModeButton.addEventListener('click', switchMode);

const startGameButton = document.querySelector('.button_start-game');
startGameButton.addEventListener('click', startGame);

document.addEventListener('click', (event) => {
  if (event.target.closest('.sidebar')) return;

  const openSidebarButton = document.querySelector('.openSidebarMenu');
  if (openSidebarButton.checked) {
    openSidebarButton.checked = false;
  }
});
