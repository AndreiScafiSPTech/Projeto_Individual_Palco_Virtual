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

//Carrocel-fotos
const fotos = [...document.querySelectorAll('.fotos-container')];
const nextBtnFotos = [...document.querySelectorAll('.nxt-btn-fotos')];
const preBtnFotos = [...document.querySelectorAll('.pre-btn-fotos')];

fotos.forEach((foto, i) => {
    let fotoDimensions = foto.getBoundingClientRect();
    let fotoWidth = fotoDimensions.width;

    nextBtnFotos[i].addEventListener('click', () => {
        foto.scrollLeft += fotoWidth;
    });

    preBtnFotos[i].addEventListener('click', () => {
        foto.scrollLeft -= fotoWidth;
    });
})

