
let currentIndexHistoria = 0;

function changeSlideHistoria(direction) {
    const slides = document.querySelectorAll('.historia');
    slides[currentIndexHistoria].classList.remove('active');

    const slidesCircle = document.querySelectorAll('.circle');
    slidesCircle[currentIndexHistoria].classList.remove('active');

    currentIndexHistoria += direction;

    if (currentIndexHistoria >= slides.length) {
        currentIndexHistoria = 0;
    } else if (currentIndexHistoria < 0) {
        currentIndexHistoria = slides.length - 1;
    }

    slides[currentIndexHistoria].classList.add('active');
    slidesCircle[currentIndexHistoria].classList.add('active');

}



