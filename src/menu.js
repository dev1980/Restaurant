import drinkMenu from './menu.png';
const menu = () => {

    let content = document.querySelector('main');

    content.innerHTML = '';
  const img = document.createElement('img');
  img.classList.add('img-fix');
  img.setAttribute('src', drinkMenu);
  img.setAttribute('alt', 'Drinks menu');
  content.appendChild(img);
};

export {menu};