import {
    TOP_CLASS,
    BOTTOM_CLASS,
    MIDDLE_CLASS,
} from './_const'

export default function(scrolling_el, scroll_mask = false) {
    const $this = scrolling_el ? scrolling_el : event.target;
    const scrollMask = scroll_mask ? scroll_mask : $this;
    const position = $($this).scrollTop();
    const frameHeight = $($this).outerHeight();
    const scrollHeight = $($this)[0].scrollHeight;

     if (Math.ceil(position) >= Math.floor(scrollHeight - frameHeight)) {
        // console.log('Bottom');
        scrollMask.classList.remove(TOP_CLASS);
        scrollMask.classList.remove(MIDDLE_CLASS);
        scrollMask.classList.add(BOTTOM_CLASS);
    } else if (position <= 0) {
            // console.log('Top');
            scrollMask.classList.add(TOP_CLASS);
            scrollMask.classList.remove(MIDDLE_CLASS);
            scrollMask.classList.remove(BOTTOM_CLASS);
    } else {
        // console.log("Mid");
        scrollMask.classList.remove(TOP_CLASS);
        scrollMask.classList.add(MIDDLE_CLASS);
        scrollMask.classList.remove(BOTTOM_CLASS);
    }
}