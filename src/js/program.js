

import markupFunction from '../templates/menu.hbs'
import menu from '../menu.json';
import { toggleOfTheme, body, Theme } from './themes.js';

const togglePosition = localStorage.getItem('toggleOfTheme');
const listOfMenu = document.querySelector('.js-menu');
document.addEventListener('DOMContentLoaded', runPage);

buildMenu(menu);

function buildMenu(menu) {
    const markup = menu.map(element => markupFunction(element)).join('')
    listOfMenu.insertAdjacentHTML('beforeend', markup)
}

function runPage() {

    toggleOfTheme.checked = JSON.parse(togglePosition);

    if (!toggleOfTheme.checked) {
        body.classList.remove(Theme.DARK)
        body.classList.add(Theme.LIGHT);

    } else if (toggleOfTheme.checked) {
        body.classList.remove(Theme.LIGHT)
        body.classList.add(Theme.DARK);
    }

}