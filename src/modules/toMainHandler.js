import initialCardsRender from './initialCardsRender';


export default function toMainHandler() {
  const startButton = document.querySelector('.button__container');
  const toMainButton = document.querySelector('.button_to-main-page');

  initialCardsRender();
  toMainButton.hidden = true;
  startButton.classList.add('button_training-mode');
  // toMainButton.removeEventListener('click', toMainHandler);
}
