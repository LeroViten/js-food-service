// imports:
import items from './menu.json';
import itemsTemplate from '../templates/menu-items.hbs';

// refs:
const menuRef = document.querySelector('.js-menu');

// adding markup via 'handlebars' template:
const markup = itemsTemplate(items);
menuRef.insertAdjacentHTML('beforeend', markup);
