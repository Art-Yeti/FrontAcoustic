export default function(tab, add_class) {
    for (let sibling of tab.parentNode.children) {
        sibling.classList.remove(add_class);
    }
    tab.classList.add(add_class);
}