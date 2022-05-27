import Swiper from "swiper/swiper-bundle.min";

// THUMB SLIDERS

const textContentPreviewSlider_cl = 'js-text-content-slider-preview';
const textContentPreviewSlider = document.querySelector(`.${textContentPreviewSlider_cl}`);
let text_content_preview_swiper;

const textContentSlider_cl = 'js-text-content-slider';
const textContentSlider = document.querySelector(`.${textContentSlider_cl}`);
const textContentSliderArrows_cl = {
    prev: 'swiper-button-prev',
    next: 'swiper-button-next',
};
let text_content_swiper;

if (textContentPreviewSlider && textContentSlider) {
    text_content_preview_swiper = new Swiper(textContentPreviewSlider, {
        loop: true,
        spaceBetween: 5,
        slidesPerView: 7,
        freeMode: true,
        watchSlidesProgress: true,
    });

    text_content_swiper = new Swiper(textContentSlider, {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: `.${textContentSliderArrows_cl.next}`,
            prevEl: `.${textContentSliderArrows_cl.prev}`,
        },
        thumbs: {
            swiper: text_content_preview_swiper,
        },
    });
}