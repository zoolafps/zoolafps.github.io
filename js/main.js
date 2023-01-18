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

/* slider que no funciona */
const slider = document.querySelector('.slider'),
    slides = Array.from(document.querySelectorAll('.slides'))

let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationID = 0,
    currentIndex = 0

slides.forEach((slide, index) => {
    const slideImage = slide.querySelector('img')
    slideImage.addEventListener('dragstart', (e) => e.
    preventDefault)
})
