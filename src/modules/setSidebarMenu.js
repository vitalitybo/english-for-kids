import cards from './cards';
import renderCards from './renderCards';
import initialCardsRender from './initialCardsRender';


export default function setSidebarMenu() {
  const mainPageLink = document.querySelector('.sidebarMenuInner > li:first-child');
  const statisticPageLink = document.querySelector('.sidebarMenuInner > li:last-child');

  mainPageLink.addEventListener('click', initialCardsRender);

  cards[0].forEach((card, index) => {
    const category = document.createElement('li');
    category.innerHTML = card;
    category.addEventListener('click', renderCards.bind(null, index + 1));
    statisticPageLink.before(category);
  });
}
