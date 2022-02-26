// import article_slider from "../../components/Sections/article-slider/article-slider";

// import text_content from "../../components/Sections/text-content/text-content";

import { Fancybox, Carousel } from "@fancyapps/ui";

function initAll() {
    // text_content(Swiper)

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
