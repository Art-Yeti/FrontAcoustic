import { 
    ACTIVE_CLASS,
    BREAKPOINTS,
    HEADER,
    HEADER_BURGER_BTN, 
    LOCK_SCROLL_CLASS, 
    OPEN_CLASS 
} from '../assets/_const'

import changeMaskOnScroll from "../assets/_changeMaskOnScroll";
import switchTabs from "../assets/_switchTabs";



const headerNavEl = document.querySelector('.js-header-nav');
const headerNavItemElems = Array.from(headerNavEl.getElementsByClassName('js-header-menu-tab'));
const headerMenuWrapperEl = headerNavEl.querySelector('.js-header-menu-wrapper');
const headerMenuEl = headerNavEl.querySelector('.js-header-menu');
const headerMaskEl = headerNavEl.querySelector('.js-header-mask');


addEvents();

document.addEventListener ('DOMNodeInserted', (event) => {

    if (event.target.classList.contains('js-header-nav')) {
        
        addEvents();

    }
}, false);

function addEvents(){
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
                const window_width = window.innerWidth;

                if (window_width > BREAKPOINTS.TABLET) {
                    const url = triggerTab.dataset.href;

                    window.location.href = url;
                } else {
                    switchTabs(headerNavItem, OPEN_CLASS);
                    headerMenuWrapperEl.classList.add(OPEN_CLASS);
                    headerMenuEl.classList.add(OPEN_CLASS);
                    changeMaskOnScroll(trackTab);
        
                    changeMaskOnScroll(headerMenuWrapperEl, headerMaskEl);
                }
            });

            trackTab.addEventListener('scroll', () => {
                changeMaskOnScroll(trackTab);
            })

            closeTabBtn.addEventListener('click', () => {
                headerMenuWrapperEl.classList.remove(OPEN_CLASS);
                headerMenuEl.classList.remove(OPEN_CLASS);
                headerNavItem.classList.remove(OPEN_CLASS);
            })
        })
        
        headerMenuWrapperEl.addEventListener('scroll', () => {
            changeMaskOnScroll(headerMenuWrapperEl, headerMaskEl);
        })

    }
}

addEvents_burger();

document.addEventListener ('DOMNodeInserted', (event) => {

    if (event.target.classList.contains(HEADER_BURGER_BTN)) {
        
        addEvents_burger();

    }
}, false);

function addEvents_burger(){
    if (HEADER_BURGER_BTN) {
        HEADER_BURGER_BTN.addEventListener('click', () => {
            const headerNavEl = document.querySelector('.js-header-nav');
            const headerMaskEl = headerNavEl.querySelector('.js-header-mask');
            
            if (HEADER_BURGER_BTN.classList.contains(ACTIVE_CLASS)) {
                window.removeEventListener('click', openMenuClickHandler);
                document.body.classList.remove(LOCK_SCROLL_CLASS);
                
                closeAllActiveTabs();
            } else {
                document.body.classList.add(LOCK_SCROLL_CLASS);
                HEADER_BURGER_BTN.classList.add(ACTIVE_CLASS);
                headerNavEl.classList.add(ACTIVE_CLASS);

                
                setTimeout(() => {
                    if (headerMenuWrapperEl && headerMaskEl) {
                        changeMaskOnScroll(headerMenuWrapperEl, headerMaskEl);
                    }

                    window.addEventListener('click', openMenuClickHandler);
                }, 100)
            }

            changeMaskOnScroll(headerMaskEl);
        })
    }
}

function closeAllActiveTabs() {
    const openElems = Array.from(HEADER.getElementsByClassName(OPEN_CLASS));
    const activeElems = Array.from(HEADER.getElementsByClassName(ACTIVE_CLASS));

    openElems.forEach((openEl) => {
        openEl.classList.remove(OPEN_CLASS);
    })

    activeElems.forEach((activeEl) => {
        activeEl.classList.remove(ACTIVE_CLASS);
    })
}

function openMenuClickHandler() {
    const openHeaderSubmenu = document.querySelector('.js-header-menu-tab.open');
    const openHeaderMenu = document.querySelector('.js-header-nav.active');

    if (openHeaderSubmenu) {
        const withinBoundaries = event.composedPath().includes(openHeaderSubmenu);
 
        if ( ! withinBoundaries ) {
            document.body.classList.remove(LOCK_SCROLL_CLASS);
            closeAllActiveTabs(); 

            window.removeEventListener('click', openMenuClickHandler);
            return;
        }
    } 

    if (openHeaderMenu) {
        const withinBoundaries = event.composedPath().includes(openHeaderMenu);
 
        if ( ! withinBoundaries ) {
            document.body.classList.remove(LOCK_SCROLL_CLASS);
            closeAllActiveTabs(); 

            window.removeEventListener('click', openMenuClickHandler);
            return;
        }
    }
}