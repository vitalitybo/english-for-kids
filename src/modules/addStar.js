export default function addStar(result) {
  const star = document.createElement('div');
  const stars = document.querySelectorAll('.star');
  const starsBlock = document.querySelector('.stars-block');


  if (stars.length) {
    stars.forEach((item) => {
      if (parseInt(getComputedStyle(item).left, 10) - 57 < 0) {
        item.style.display = 'none';
      }

      item.style.right = `${parseInt(getComputedStyle(item).right, 10) + 57}px`;
    });
  }

  star.classList.add('star');

  switch (result) {
    case 'correct':
      star.classList.add('star_correct');
      break;
    case 'incorrect':
      star.classList.add('star_incorrect');
      break;
    default:
      break;
  }

  starsBlock.append(star);
}
