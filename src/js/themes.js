'use strict'

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const toggleOfTheme = document.querySelector('.js-switch-input');
const body = document.querySelector('body');
export { toggleOfTheme, body, Theme };

toggleOfTheme.addEventListener('change', toggleTheme)

function toggleTheme() {

    if (!toggleOfTheme.checked) {
        body.classList.remove(Theme.DARK)
        body.classList.add(Theme.LIGHT);

    } else if (toggleOfTheme.checked) {
        body.classList.remove(Theme.LIGHT)
        body.classList.add(Theme.DARK);
    }

    localStorage.setItem('toggleOfTheme', JSON.stringify(toggleOfTheme.checked));

}
