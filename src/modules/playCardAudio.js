import cards from './cards';

export default function playCardAudio(event) {
  const cardsCollection = document.querySelectorAll('.card');

  const target = event.target.closest('.card');
  const index = Array.from(cardsCollection).indexOf(target);

  const audio = new Audio(`./assets/${cards[+index + 1][+index].audioSrc}`);

  audio.play();
}
