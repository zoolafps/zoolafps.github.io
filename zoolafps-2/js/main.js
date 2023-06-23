let a = document.querySelectorAll(".a");

function scroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (let i = 0; i < a.length; i++) {
        let tall = a[i].offsetTop;
        if (tall - 500 < scrollTop) {
            a[i].style.opacity = 1;
            a[i].classList.add("sa");
        }
    }
}
window.addEventListener("scroll", scroll)