export default function(track, direction) {
    if (direction === 'prev') $(track).animate({ scrollLeft: "-=390" }, 500);
    if (direction === 'bottom') $(track).animate({ scrollTop: "+=390" }, 500);
    if (direction === 'next') $(track).animate({ scrollLeft: "+=390" }, 500);
}