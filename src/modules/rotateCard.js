export default function (event) {
  event.preventDefault();

  const back = event.target.closest('.card__back');
  const front = back.nextElementSibling;

  const rotateHandler = () => {
    front.classList.remove('rotatable');
    back.classList.remove('rotatable');
  };

  front.classList.add('rotatable');
  back.classList.add('rotatable');
  front.addEventListener('mouseleave', rotateHandler);
}
