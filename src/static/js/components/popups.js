import { ACTIVE_CLASS, LOCK_SCROLL_CLASS } from "../assets/_const";


const popupWindowElems = Array.from(document.getElementsByClassName('js-popup'));

if (popupWindowElems.length) {
    const popupOpenBtnElems = Array.from(document.getElementsByClassName('js-popup-btn'));
    const popupCloseBtnElems = Array.from(document.getElementsByClassName('js-popup-close-btn'));

    if (popupOpenBtnElems.length) {
        popupOpenBtnElems.forEach((popupOpenBtnEl) => {
            popupOpenBtnEl.addEventListener('click', () => {
                const popupAttr = popupOpenBtnEl.dataset.popup;
                const activePopup = document.querySelector(`.js-popup[data-popup='${popupAttr}']`);
                const closePopupBtn = activePopup.querySelector('.js-popup-close-btn ');
    
                document.body.classList.add(LOCK_SCROLL_CLASS);
                activePopup.classList.add(ACTIVE_CLASS);
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

