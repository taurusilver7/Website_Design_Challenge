

const slides = document.querySelectorAll('.slide');
const carousel = document.getElementById('carousel');

const left = document.getElementById('left');
const right = document.getElementById('right');

const slide_count = slides.length;

let current_slide = 0;

right.addEventListener('click', () => {
    current_slide++;
    if(current_slide> slide_count - 1) {
        current_slide = 0;
    }
    updateCarousel();
});

left.addEventListener('click', () => {
    current_slide--;
    if(current_slide < 0) {
        current_slide = slide_count - 1;
    }

    updateCarousel();
});

function updateCarousel() {
    carousel.style.transform = `translateX(${-current_slide * slides[0].offsetWidth}px)`;

    document.body.style.background = slides[current_slide].getAttribute('data-bg');
}