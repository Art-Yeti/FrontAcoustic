import Swiper from "swiper/swiper-bundle.min";

import text_content from "../../components/Sections/text-content/text-content";

function initAll() {
    text_content(Swiper)
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
