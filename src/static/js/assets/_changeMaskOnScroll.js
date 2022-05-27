import {
    TOP_CLASS,
    BOTTOM_CLASS,
} from './_const'

export default function(scrolling_el) {
    const position = $(event.target).scrollTop();
    const frameHeight = $(event.target).outerHeight();
    const scrollHeight = $(event.target)[0].scrollHeight;

    if (position <= 0) {
        // console.log('Top');
        scrolling_el.classList.add(TOP_CLASS);
        scrolling_el.classList.remove(BOTTOM_CLASS);
    } else if (Math.ceil(position) >= Math.floor(scrollHeight - frameHeight)) {
        // console.log('Bottom');
        scrolling_el.classList.remove(TOP_CLASS);
        scrolling_el.classList.add(BOTTOM_CLASS);
    } else {
        // console.log("Mid");
        scrolling_el.classList.remove(TOP_CLASS);
        scrolling_el.classList.remove(BOTTOM_CLASS);
    }
}