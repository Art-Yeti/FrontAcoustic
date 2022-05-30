import { 
    ACTIVE_CLASS,
    BREAKPOINTS, 
    HEADER, 
    LOCK_SCROLL_CLASS, 
    MODIFY_CLASS 
} from "./assets/_const";

// ФУНКЦИИ

import calcHeaderHeight from "./assets/_calcHeaderHeight";
import calcWidthScrollbar from "./assets/_calcWidthScrollbar";
import calcScrollToTop from "./assets/_calcScrollToTop";

// КОМПОНЕНТЫ

import './components/header';
import './components/popups';
import './components/footer';
import './components/sliders';

function initAll() {
    // задаем значение padding-right для исключения дерганья заднего фона при overflow hidden для body
    document.documentElement.style.setProperty('--padding-right', `${calcWidthScrollbar()}px`);

    window.addEventListener('orientationchange', () => {
        const window_width = window.innerWidth;

        document.documentElement.style.setProperty('--padding-right', `${calcWidthScrollbar()}px`);

        if (window_width < BREAKPOINTS.TABLET && HEADER.classList.contains(MODIFY_CLASS)) {
            HEADER.classList.remove(MODIFY_CLASS);
        }

        if (window_width >= BREAKPOINTS.TABLET && document.querySelector('.js-header-nav').classList.contains(ACTIVE_CLASS)) {
            document.body.classList.remove(LOCK_SCROLL_CLASS);
        } 
        if (window_width < BREAKPOINTS.TABLET && document.querySelector('.js-header-nav').classList.contains(ACTIVE_CLASS)) {
            document.body.classList.add(LOCK_SCROLL_CLASS);
        }
    })

    window.addEventListener('resize', () => {
        const window_width = window.innerWidth;

        document.documentElement.style.setProperty('--padding-right', `${calcWidthScrollbar()}px`);

        if (window_width < BREAKPOINTS.TABLET && HEADER.classList.contains(MODIFY_CLASS)) {
            HEADER.classList.remove(MODIFY_CLASS);
        }

        if (window_width >= BREAKPOINTS.TABLET && document.querySelector('.js-header-nav').classList.contains(ACTIVE_CLASS)) {
            document.body.classList.remove(LOCK_SCROLL_CLASS);
        } 
        if (window_width < BREAKPOINTS.TABLET && document.querySelector('.js-header-nav').classList.contains(ACTIVE_CLASS)) {
            document.body.classList.add(LOCK_SCROLL_CLASS);
        }
    })

    window.addEventListener('scroll', () => {
        const window_width = window.innerWidth;

        if (window_width >= BREAKPOINTS.TABLET) {
            if (calcScrollToTop() > 50 && !HEADER.classList.contains(MODIFY_CLASS)) {
                HEADER.classList.add(MODIFY_CLASS);
            }

            if (calcScrollToTop() <= 50 && HEADER.classList.contains(MODIFY_CLASS)) {
                HEADER.classList.remove(MODIFY_CLASS);
            }
        } 
    })
}

function ready(fn) {
    if (document.readyState != "loading") {
        fn();
        console.log('1');
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

ready(initAll);
