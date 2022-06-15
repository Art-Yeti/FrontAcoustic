import { 
    ACTIVE_CLASS,
    BREAKPOINTS, 
    HEADER, 
    LOCK_SCROLL_CLASS, 
    MODIFY_CLASS 
} from "./assets/_const";

// import { Fancybox, Carousel } from "@fancyapps/ui";

// ФУНКЦИИ

import calcWidthScrollbar from "./assets/_calcWidthScrollbar";
import calcScrollToTop from "./assets/_calcScrollToTop";

// КОМПОНЕНТЫ

import './components/header';
import './components/popups';
import './components/footer';
import './components/sliders';

function initAll() {

    let vh = window.innerHeight * 0.01;

    // задаем значение padding-right для исключения дерганья заднего фона при overflow hidden для body
    document.documentElement.style.setProperty('--padding-right', `${calcWidthScrollbar()}px`);

    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

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

        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
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

        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
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

        // let vh = window.innerHeight * 0.01;
        // document.documentElement.style.setProperty('--vh', `${vh}px`);
    })


    const article_slisder = ".js-article-slider";

    if ($(article_slisder).length) {
        let swiper_mainBanner = new Swiper(article_slisder, {
            slidesPerView: 1,
            loop: true,
            navigation: {
                nextEl: '.swiper-btn-next',
                prevEl: '.swiper-btn-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 3,
                }
              }

          });
    }


    const mainCarousel = new Carousel(document.querySelector(".js-text-content-mainCarousel"), {
        Dots: false,
    });

    const thumbCarousel = new Carousel(document.querySelector(".js-text-content-thumbCarousel"), {
        Sync: {
            target: mainCarousel,
            friction: 0,
        },
        Dots: false,
        Navigation: false,
        center: true,
        slidesPerPage: 1,
        infinite: false,
    });
    
    Fancybox.bind('[data-fancybox="gallery"]', {
        Toolbar: false,
        closeButton: "top",
        arrows: false,
        autoFocus: true,
        Carousel: {
            on: {
            change: (that) => {
                mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
                friction: 0,
                });
            },
            },
        },
    });


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
