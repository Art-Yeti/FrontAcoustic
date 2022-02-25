import article_slider from "../../components/Sections/article-slider/article-slider";

import text_content from "../../components/Sections/text-content/text-content";

function initAll() {
    text_content(Swiper)

    const article_slisder = ".js-article-slider";

    if ($(article_slisder).length) {
        let swiper_mainBanner = new Swiper(article_slisder, {
            slidesPerView: 1,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 3,
                }
              }

          });
    }
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
