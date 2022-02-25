export default function text_content(Swiper) {
    console.log('init');

    let swiper = new Swiper(".js-text-content-slider-preview", {
        loop: true,
        spaceBetween: 5,
        slidesPerView: 7,
        freeMode: true,
        watchSlidesProgress: true,
      });
      let swiper2 = new Swiper(".js-text-content-slider", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });
}