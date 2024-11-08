// carrocel de slides história.
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

function circleButtonHistória(index) {
    const slides = document.querySelectorAll('.historia');
    slides[currentIndexHistoria].classList.remove('active');

    const slidesCircle = document.querySelectorAll('.circle');
    slidesCircle[currentIndexHistoria].classList.remove('active');

    currentIndexHistoria = index;

    slides[currentIndexHistoria].classList.add('active');
    slidesCircle[currentIndexHistoria].classList.add('active');
}

// carrocel de slides Monólogos.
let currentIndexMonologos = 0;

function changeSlideMonologos(direction) {
    const slides = document.querySelectorAll('.monologos');
    slides[currentIndexMonologos].classList.remove('active');
    console.log(slides)

    const slidesCircle = document.querySelectorAll('.white_circle');
    slidesCircle[currentIndexMonologos].classList.remove('active');

    currentIndexMonologos += direction;

    if (currentIndexMonologos >= slides.length) {
        currentIndexMonologos = 0;
    } else if (currentIndexMonologos < 0) {
        currentIndexMonologos = slides.length - 1;
    }

    slides[currentIndexMonologos].classList.add('active');
    slidesCircle[currentIndexMonologos].classList.add('active');

}

function circleButtonMonologo(index) {
    const slides = document.querySelectorAll('.monologos');
    slides[currentIndexMonologos].classList.remove('active');

    const slidesCircle = document.querySelectorAll('.white_circle');
    slidesCircle[currentIndexMonologos].classList.remove('active');

    currentIndexMonologos = index;

    slides[currentIndexMonologos].classList.add('active');
    slidesCircle[currentIndexMonologos].classList.add('active');
}

// carrocel de slides Poemas.
let currentIndexPoemas = 0;

function changeSlidePoemas(direction) {
    const slides = document.querySelectorAll('.poemas');
    slides[currentIndexPoemas].classList.remove('active');
    console.log(slides)

    const slidesCircle = document.querySelectorAll('.poema_circle');
    slidesCircle[currentIndexPoemas].classList.remove('active');

    currentIndexPoemas += direction;

    if (currentIndexPoemas >= slides.length) {
        currentIndexPoemas = 0;
    } else if (currentIndexPoemas < 0) {
        currentIndexPoemas = slides.length - 1;
    }

    slides[currentIndexPoemas].classList.add('active');
    slidesCircle[currentIndexPoemas].classList.add('active');

}

function circleButtonPoema(index) {
    console.log('click')
    const slides = document.querySelectorAll('.poemas');
    slides[currentIndexPoemas].classList.remove('active');

    const slidesCircle = document.querySelectorAll('.poema_circle');
    slidesCircle[currentIndexPoemas].classList.remove('active');

    currentIndexPoemas = index;

    slides[currentIndexPoemas].classList.add('active');
    slidesCircle[currentIndexPoemas].classList.add('active');
}