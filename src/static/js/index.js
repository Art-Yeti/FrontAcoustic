// ФУНКЦИИ
import calcWidthScrollbar from "./assets/_calcWidthScrollbar";

// КОМПОНЕНТЫ

import header from "./components/header";
import footer from "./components/footer";
import sliders from "./components/sliders";

function initAll() {
    // задаем значение padding-right для исключения дерганья заднего фона при overflow hidden для body
    document.documentElement.style.setProperty('--padding-right', `${calcWidthScrollbar()}px`);

    window.addEventListener('orientationchange', () => {
    document.documentElement.style.setProperty('--padding-right', `${calcWidthScrollbar()}px`);
    })

    window.addEventListener('resize', () => {
    document.documentElement.style.setProperty('--padding-right', `${calcWidthScrollbar()}px`);
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
