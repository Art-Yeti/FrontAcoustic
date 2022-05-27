import { 
    ACTIVE_CLASS,
    HEADER_BURGER_BTN, 
    LOCK_SCROLL_CLASS, OPEN_CLASS 
} from '../assets/_const'

import calcHeaderHeight from "../assets/_calcHeaderHeight";
import changeMaskOnScroll from "../assets/_changeMaskOnScroll";
import switchTabs from "../assets/_switchTabs";

const headerNavEl = document.querySelector('.js-header-nav');
const headerNavItemElems = Array.from(headerNavEl.getElementsByClassName('js-header-menu-tab'));
const headerMenuWrapperEl = headerNavEl.querySelector('.js-header-menu-wrapper');
const headerMenuEl = headerNavEl.querySelector('.js-header-menu');
const headerMaskEl = headerNavEl.querySelector('.js-header-mask');

if (headerNavItemElems.length) {
    headerNavItemElems.forEach((headerNavItem) => {
        const triggerTab = headerNavItem.querySelector('.js-header-menu-tab-trigger');
        const trackTab = headerNavItem.querySelector('.js-header-menu-track');
        const closeTabBtn = headerNavItem.querySelector('.js-header-menu-back-btn');

        triggerTab.addEventListener('click', (e) => {
            switchTabs(headerNavItem, OPEN_CLASS);
            headerMenuWrapperEl.classList.add(OPEN_CLASS);
            headerMenuEl.classList.add(OPEN_CLASS);
        });

        trackTab.addEventListener('scroll', () => {
            changeMaskOnScroll(trackTab);
        })

        closeTabBtn.addEventListener('click', () => {
            headerNavItem.classList.remove(OPEN_CLASS);
            headerMenuWrapperEl.classList.remove(OPEN_CLASS);
            headerMenuEl.classList.remove(OPEN_CLASS);
        })
    })

    window.addEventListener('click', (e) => {
        const openHeaderSubmenu = document.querySelector('.js-header-menu-tab.open');

        if (openHeaderSubmenu) {
            const withinBoundaries = e.composedPath().includes(openHeaderSubmenu);
     
            if ( ! withinBoundaries ) {
                openHeaderSubmenu.classList.remove(OPEN_CLASS)
            }
        }
    })

    headerMenuEl.addEventListener('scroll', () => {
        changeMaskOnScroll(headerMaskEl);
    })
}

// задаем значение padding-right для исключения дерганья заднего фона при overflow hidden для body
document.documentElement.style.setProperty('--padding-top', `${calcHeaderHeight() + 20}px`);

window.addEventListener('orientationchange', () => {
document.documentElement.style.setProperty('--padding-top', `${calcHeaderHeight() + 20}px`);
})

window.addEventListener('resize', () => {
document.documentElement.style.setProperty('--padding-top', `${calcHeaderHeight() + 20}px`);
})

if (HEADER_BURGER_BTN) {
    HEADER_BURGER_BTN.addEventListener('click', () => {
        document.body.classList.toggle(LOCK_SCROLL_CLASS);
        HEADER_BURGER_BTN.classList.toggle(ACTIVE_CLASS);
        headerNavEl.classList.toggle(ACTIVE_CLASS);
    })
}