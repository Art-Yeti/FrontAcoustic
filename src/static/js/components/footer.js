import { OPEN_CLASS } from '../assets/_const'

const footerNavItemElems = Array.from(document.getElementsByClassName('js-menu-tab'));

if (footerNavItemElems.length) {
    footerNavItemElems.forEach((footerNavItem) => {
        const triggerTab = footerNavItem.querySelector('.js-menu-tab-trigger');

        triggerTab.addEventListener('click', (e) => {
            footerNavItem.classList.toggle(OPEN_CLASS);
        })
    })
}