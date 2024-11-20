// carrocel de slides Quiz.
let currentIndexQuiz = 0;

function changeSlideQuiz(direction) {
    const slides = document.querySelectorAll('.pergunta-container');
    slides[currentIndexQuiz].classList.remove('active');

    const slidesCircle = document.querySelectorAll('.circle');
    slidesCircle[currentIndexQuiz].classList.remove('active');

    currentIndexQuiz += direction;

    if (currentIndexQuiz >= slides.length) {
        currentIndexQuiz = 0;
    } else if (currentIndexQuiz < 0) {
        currentIndexQuiz = slides.length - 1;
    }

    slides[currentIndexQuiz].classList.add('active');
    slidesCircle[currentIndexQuiz].classList.add('active');
}

function circleButtonQuiz(index) {
    const slides = document.querySelectorAll('.pergunta-container');
    slides[currentIndexQuiz].classList.remove('active');

    const slidesCircle = document.querySelectorAll('.circle');
    slidesCircle[currentIndexQuiz].classList.remove('active');

    currentIndexQuiz = index;

    slides[currentIndexQuiz].classList.add('active');
    slidesCircle[currentIndexQuiz].classList.add('active');
}

function finalizarQuiz() {
    const pergunta_01 = document.querySelector('input[name="pergunta-1"]:checked').value;
    const pergunta_02 = document.querySelector('input[name="pergunta-2"]:checked').value;
    const pergunta_03 = document.querySelector('input[name="pergunta-3"]:checked').value;
    const pergunta_04 = document.querySelector('input[name="pergunta-4"]:checked').value;
    const pergunta_05 = document.querySelector('input[name="pergunta-5"]:checked').value;
    const pergunta_06 = document.querySelector('input[name="pergunta-6"]:checked').value;
    const pergunta_07 = document.querySelector('input[name="pergunta-7"]:checked').value;
    const pergunta_08 = document.querySelector('input[name="pergunta-8"]:checked').value;
    const pergunta_09 = document.querySelector('input[name="pergunta-9"]:checked').value;
    const pergunta_10 = document.querySelector('input[name="pergunta-10"]:checked').value;

    var comico = 0;
    var dramatico = 0;
    var melodramatico = 0;
    var musical = 0;
    var improviso = 0;

    /* Pergunta-01 */
    if (pergunta_01 == 1) {
        comico += 5;
        dramatico += 4;
        melodramatico += 3;
        musical += 2;
        improviso += 1;
    } else if (pergunta_01 == 2) {
        comico += 4;
        dramatico += 3;
        melodramatico = 2;
        musical += 1;
        improviso += 5;
    } else if (pergunta_01 == 3) {
        comico += 3;
        dramatico += 2;
        melodramatico += 1;
        musical += 5;
        improviso += 4;
    } else if (pergunta_01 == 4) {
        comico += 2;
        dramatico += 1;
        melodramatico += 5;
        musical += 4;
        improviso += 3;
    } else if (pergunta_01 == 5) {
        comico += 1;
        dramatico += 5;
        melodramatico += 4;
        musical += 3;
        improviso += 2;
    }

    /* Pergunta-02 */
    if (pergunta_02 == 1) {
        comico += 5;
        dramatico += 4;
        melodramatico += 3;
        musical += 2;
        improviso += 1;
    } else if (pergunta_02 == 2) {
        comico += 4;
        dramatico += 3;
        melodramatico += 2;
        musical += 1;
        improviso += 5;
    } else if (pergunta_02 == 3) {
        comico += 3;
        dramatico += 2;
        melodramatico += 1;
        musical += 5;
        improviso += 4;
    } else if (pergunta_02 == 4) {
        comico += 2;
        dramatico += 1;
        melodramatico += 5;
        musical += 4;
        improviso += 3;
    } else if (pergunta_02 == 5) {
        comico += 1;
        dramatico += 5;
        melodramatico += 4;
        musical += 3;
        improviso += 2;
    }

    /* Pergunta-03 */
    if (pergunta_03 == 1) {
        comico += 5;
        dramatico += 4;
        melodramatico += 3;
        musical += 2;
        improviso += 1;
    } else if (pergunta_03 == 2) {
        comico += 4;
        dramatico += 3;
        melodramatico += 2;
        musical += 1;
        improviso += 5;
    } else if (pergunta_03 == 3) {
        comico += 3;
        dramatico += 2;
        melodramatico += 1;
        musical += 5;
        improviso += 4;
    } else if (pergunta_03 == 4) {
        comico += 2;
        dramatico += 1;
        melodramatico += 5;
        musical += 4;
        improviso += 3;
    } else if (pergunta_03 == 5) {
        comico += 1;
        dramatico += 5;
        melodramatico += 4;
        musical += 3;
        improviso += 2;
    }

    /* Pergunta-04 */
    if (pergunta_04 == 1) {
        comico += 5;
        dramatico += 4;
        melodramatico += 3;
        musical += 2;
        improviso += 1;
    } else if (pergunta_04 == 2) {
        comico += 4;
        dramatico += 3;
        melodramatico += 2;
        musical += 1;
        improviso += 5;
    } else if (pergunta_04 == 3) {
        comico += 3;
        dramatico += 2;
        melodramatico += 1;
        musical += 5;
        improviso += 4;
    } else if (pergunta_04 == 4) {
        comico += 2;
        dramatico += 1;
        melodramatico += 5;
        musical += 4;
        improviso += 3;
    } else if (pergunta_04 == 5) {
        comico += 1;
        dramatico += 5;
        melodramatico += 4;
        musical += 3;
        improviso += 2;
    }

    /* Pergunta-05 */
    if (pergunta_05 == 1) {
        comico += 5;
        dramatico += 4;
        melodramatico += 3;
        musical += 2;
        improviso += 1;
    } else if (pergunta_05 == 2) {
        comico += 4;
        dramatico += 3;
        melodramatico += 2;
        musical += 1;
        improviso += 5;
    } else if (pergunta_05 == 3) {
        comico += 3;
        dramatico += 2;
        melodramatico += 1;
        musical += 5;
        improviso += 4;
    } else if (pergunta_05 == 4) {
        comico += 2;
        dramatico += 1;
        melodramatico += 5;
        musical += 4;
        improviso += 3;
    } else if (pergunta_05 == 5) {
        comico += 1;
        dramatico += 5;
        melodramatico += 4;
        musical += 3;
        improviso += 2;
    }

    /* Pergunta-06 */
    if (pergunta_06 == 1) {
        comico += 5;
        dramatico += 4;
        melodramatico += 3;
        musical += 2;
        improviso += 1;
    } else if (pergunta_06 == 2) {
        comico += 4;
        dramatico += 3;
        melodramatico += 2;
        musical += 1;
        improviso += 5;
    } else if (pergunta_06 == 3) {
        comico += 3;
        dramatico += 2;
        melodramatico += 1;
        musical += 5;
        improviso += 4;
    } else if (pergunta_06 == 4) {
        comico += 2;
        dramatico += 1;
        melodramatico += 5;
        musical += 4;
        improviso += 3;
    } else if (pergunta_06 == 5) {
        comico += 1;
        dramatico += 5;
        melodramatico += 4;
        musical += 3;
        improviso += 2;
    }

    /* Pergunta-07 */
    if (pergunta_07 == 1) {
        comico += 5;
        dramatico += 4;
        melodramatico += 3;
        musical += 2;
        improviso += 1;
    } else if (pergunta_07 == 2) {
        comico += 4;
        dramatico += 3;
        melodramatico += 2;
        musical += 1;
        improviso += 5;
    } else if (pergunta_07 == 3) {
        comico += 3;
        dramatico += 2;
        melodramatico += 1;
        musical += 5;
        improviso += 4;
    } else if (pergunta_07 == 4) {
        comico += 2;
        dramatico += 1;
        melodramatico += 5;
        musical += 4;
        improviso += 3;
    } else if (pergunta_07 == 5) {
        comico += 1;
        dramatico += 5;
        melodramatico += 4;
        musical += 3;
        improviso += 2;
    }


    /* Pergunta-08 */
    if (pergunta_08 == 1) {
        comico += 5;
        dramatico += 4;
        melodramatico += 3;
        musical += 2;
        improviso += 1;
    } else if (pergunta_08 == 2) {
        comico += 4;
        dramatico += 3;
        melodramatico += 2;
        musical += 1;
        improviso += 5;
    } else if (pergunta_08 == 3) {
        comico += 3;
        dramatico += 2;
        melodramatico += 1;
        musical += 5;
        improviso += 4;
    } else if (pergunta_08 == 4) {
        comico += 2;
        dramatico += 1;
        melodramatico += 5;
        musical += 4;
        improviso += 3;
    } else if (pergunta_08 == 5) {
        comico += 1;
        dramatico += 5;
        melodramatico += 4;
        musical += 3;
        improviso += 2;
    }

    /* Pergunta-09 */
    if (pergunta_09 == 1) {
        comico += 5;
        dramatico += 4;
        melodramatico += 3;
        musical += 2;
        improviso += 1;
    } else if (pergunta_09 == 2) {
        comico += 4;
        dramatico += 3;
        melodramatico += 2;
        musical += 1;
        improviso += 5;
    } else if (pergunta_09 == 3) {
        comico += 3;
        dramatico += 2;
        melodramatico += 1;
        musical += 5;
        improviso += 4;
    } else if (pergunta_09 == 4) {
        comico += 2;
        dramatico += 1;
        melodramatico += 5;
        musical += 4;
        improviso += 3;
    } else if (pergunta_09 == 5) {
        comico += 1;
        dramatico += 5;
        melodramatico += 4;
        musical += 3;
        improviso += 2;
    }

    /* Pergunta-10 */
    if (pergunta_10 == 1) {
        comico += 5;
        dramatico += 4;
        melodramatico += 3;
        musical += 2;
        improviso += 1;
    } else if (pergunta_10 == 2) {
        comico += 4;
        dramatico += 3;
        melodramatico += 2;
        musical += 1;
        improviso += 5;
    } else if (pergunta_10 == 3) {
        comico += 3;
        dramatico += 2;
        melodramatico += 1;
        musical += 5;
        improviso += 4;
    } else if (pergunta_10 == 4) {
        comico += 2;
        dramatico += 1;
        melodramatico += 5;
        musical += 4;
        improviso += 3;
    } else if (pergunta_10 == 5) {
        comico += 1;
        dramatico += 5;
        melodramatico += 4;
        musical += 3;
        improviso += 2;
    }

    /* console.log(pergunta_01, pergunta_02, pergunta_03, pergunta_04, pergunta_05, pergunta_06, pergunta_07, pergunta_08, pergunta_09, pergunta_10); */

    /*  console.log(pergunta_01 + " cômico: " + comico + " dramático: " + dramatico + " melodramático: " + melodramatico + " musical: " + musical + " improviso: " + improviso) */

    console.log("total" + " cômico: " + comico + " dramático: " + dramatico + " melodramático: " + melodramatico + " musical: " + musical + " improviso: " + improviso)
}