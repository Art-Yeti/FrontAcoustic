import { OPEN_CLASS } from '../assets/_const'

addEvents();

document.body.addEventListener ('DOMNodeInserted', (event) => {

    if(event.target.classList){
        if (event.target.classList.contains('js-menu-tab')) {
            
            addEvents();

        }
    }
}, false);

function addEvents(){
    const footerNavItemElems = Array.from(document.getElementsByClassName('js-menu-tab'));

    if (footerNavItemElems.length) {
        footerNavItemElems.forEach((footerNavItem) => {
            const triggerTab = footerNavItem.querySelector('.js-menu-tab-trigger');

            triggerTab.addEventListener('click', (e) => {
                footerNavItem.classList.toggle(OPEN_CLASS);
            })
        })
    }
}