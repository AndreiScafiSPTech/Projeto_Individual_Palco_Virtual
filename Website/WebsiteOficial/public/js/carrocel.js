const cartazes = [...document.querySelectorAll('.cartazes-container')];
const nextBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

cartazes.forEach((cartaz, i) => {
    let cartazDimensions = cartaz.getBoundingClientRect();
    let cartazWidth = cartazDimensions.width;

    nextBtn[i].addEventListener('click', () => {
        cartaz.scrollLeft += cartazWidth;
    });

    preBtn[i].addEventListener('click', () => {
        cartaz.scrollLeft -= cartazWidth;
    });
})

