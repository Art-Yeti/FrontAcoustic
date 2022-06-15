import { ACTIVE_CLASS, LOCK_SCROLL_CLASS } from "../assets/_const";

import slideTrack from "../assets/_slideTrack";
import changeMaskOnScroll from "../assets/_changeMaskOnScroll";

addEvents();

document.addEventListener ('DOMNodeInserted', (event) => {

    if (event.target.classList.contains('js-popup')) {
        
        addEvents();

    }
}, false);

function addEvents(){

    const popupWindowElems = Array.from(document.getElementsByClassName('js-popup'));

    if (popupWindowElems.length) {
        const popupOpenBtnElems = Array.from(document.getElementsByClassName('js-popup-btn'));
        const popupCloseBtnElems = Array.from(document.getElementsByClassName('js-popup-close-btn'));

        if (popupOpenBtnElems.length) {
            popupOpenBtnElems.forEach((popupOpenBtnEl) => {
                popupOpenBtnEl.addEventListener('click', () => {
                    const popupAttr = popupOpenBtnEl.dataset.popup;
                    const activePopup = document.querySelector(`.js-popup[data-popup='${popupAttr}']`);
                    const popupScrollMask = activePopup.querySelector('.js-popup-mask');
                    const popupSlideBtn = popupScrollMask.querySelector('svg');
                    const popupScrollTrack = activePopup.querySelector('.js-popup-track');

                    document.body.classList.add(LOCK_SCROLL_CLASS);
                    activePopup.classList.add(ACTIVE_CLASS);

                    changeMaskOnScroll(popupScrollTrack, popupScrollMask);
                    
                    popupScrollTrack.addEventListener('scroll', () => {
                        changeMaskOnScroll(popupScrollTrack, popupScrollMask);
                    })

                    popupSlideBtn.addEventListener('click', () => {
                        slideTrack(popupScrollTrack, 'bottom')
                    })
                })
            })
        }

        if (popupCloseBtnElems.length) {
            popupCloseBtnElems.forEach((popupCloseBtnEl) => {
                popupCloseBtnEl.addEventListener('click', () => {
                    const activePopup = popupCloseBtnEl.closest('.js-popup');
        
                    document.body.classList.remove(LOCK_SCROLL_CLASS);
                    activePopup.classList.remove(ACTIVE_CLASS);
                })
            })
        }
    }
}

