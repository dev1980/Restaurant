import './style.css';
import {homePage, homePageContent} from './header'; 
import about from './about';
import menu from './menu';
import contact from './contact';

homePage();
homePageContent();

const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    const tabName = tab.className.replace('tab ', '');
    const main = document.querySelector('main');

    if (tabName === main.id) {
      return;} 
switch(tabName) {
    case 'home': {
        main.id = "home";
        homePageContent();                
        break;
    }
    case 'about': {
        main.id = "about";
        about();
        break;
    }
    case 'menu': {
        main.id = "menu";
        menu();
        break;
    }
    case 'contact': {
        main.id = "contact";
        contact();
        break;
    }
    }
  });
});