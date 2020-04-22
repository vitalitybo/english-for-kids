import rotateCard from './rotateCard';
import cards from './cards';
import { states } from './statesObj';


const cardsClickHandler = (event) => {
  event.preventDefault();

  const targetRotateButton = event.target.closest('.rotate-button');
  const target = event.target.closest('.card_play-mode');
  const currentCardCollection = document.querySelectorAll('.card_play-mode');
  const k = Array.from(currentCardCollection).indexOf(target);

  if (targetRotateButton) {
    rotateCard(targetRotateButton);
  } else if (target) {
    if (!states.locked) {
      new Audio(`./assets/${cards[states.targetCollection][k].audioSrc}`).play();
    }
  }
};

export default cardsClickHandler;
