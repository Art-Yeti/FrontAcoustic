import article_slider from "../../components/Sections/article-slider/article-slider";


$(document).ready(function () {

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

})