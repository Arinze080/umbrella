// Fade-in animation on scroll
const animElements = document.querySelectorAll('.animate');

function checkScroll() {
    const triggerBottom = window.innerHeight * 0.8;
    animElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', checkScroll);
checkScroll();
