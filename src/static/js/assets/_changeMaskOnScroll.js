import {
    TOP_CLASS,
    BOTTOM_CLASS,
    MIDDLE_CLASS,
} from './_const'

export default function(scrolling_el) {
    const $this = scrolling_el ? scrolling_el : event.target;
    const position = $($this).scrollTop();
    const frameHeight = $($this).outerHeight();
    const scrollHeight = $($this)[0].scrollHeight;

     if (Math.ceil(position) >= Math.floor(scrollHeight - frameHeight)) {
        // console.log('Bottom');
        scrolling_el.classList.remove(TOP_CLASS);
        scrolling_el.classList.remove(MIDDLE_CLASS);
        scrolling_el.classList.add(BOTTOM_CLASS);
    } else if (position <= 0) {
            // console.log('Top');
            scrolling_el.classList.add(TOP_CLASS);
            scrolling_el.classList.remove(MIDDLE_CLASS);
            scrolling_el.classList.remove(BOTTOM_CLASS);
    } else {
        // console.log("Mid");
        scrolling_el.classList.remove(TOP_CLASS);
        scrolling_el.classList.add(MIDDLE_CLASS);
        scrolling_el.classList.remove(BOTTOM_CLASS);
    }
}