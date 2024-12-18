// carrocel de slides Quiz.
let currentIndexQuiz = 0;


function changeSlideQuiz(direction) {
    const btnLeft = document.getElementById('btn-left');
    const btnRight = document.getElementById('btn-right');
    btnLeft.classList.remove('disabled');
    btnRight.classList.remove('disabled');

    const slides = document.querySelectorAll('.pergunta-container');
    slides[currentIndexQuiz].classList.remove('active');

    const slidesCircle = document.querySelectorAll('.circle');
    slidesCircle[currentIndexQuiz].classList.remove('active');

    currentIndexQuiz += direction;
    console.log(currentIndexQuiz)

    if (currentIndexQuiz >= slides.length) {
        currentIndexQuiz = 0;
    } else if (currentIndexQuiz < 0) {
        currentIndexQuiz = slides.length - 1;
    }

    slides[currentIndexQuiz].classList.add('active');
    slidesCircle[currentIndexQuiz].classList.add('active');

    quizChecked();

    if (currentIndexQuiz >= slides.length - 1) {
        btnRight.classList.add('disabled');
    } else if (currentIndexQuiz <= 0) {
        btnLeft.classList.add('disabled');
    }
}


function circleButtonQuiz(index) {
    const btnLeft = document.getElementById('btn-left');
    const btnRight = document.getElementById('btn-right');
    btnLeft.classList.remove('disabled');
    btnRight.classList.remove('disabled');

    const slides = document.querySelectorAll('.pergunta-container');
    slides[currentIndexQuiz].classList.remove('active');

    const slidesCircle = document.querySelectorAll('.circle');
    slidesCircle[currentIndexQuiz].classList.remove('active');

    currentIndexQuiz = index;

    slides[currentIndexQuiz].classList.add('active');
    slidesCircle[currentIndexQuiz].classList.add('active');

    if (currentIndexQuiz >= slides.length - 1) {
        btnRight.classList.add('disabled');
    } else if (currentIndexQuiz <= 0) {
        btnLeft.classList.add('disabled');
    }

    quizChecked()
}

function quizChecked() {
    const slidesCircle = document.querySelectorAll('.circle');
    for (let i = 1; i <= 10; i++) {
        const listaPergunta = document.querySelectorAll(`input[name="pergunta-${i}"]`);

        for (let j = 0; j < listaPergunta.length; j++) {

            if (listaPergunta[j].checked) {
                slidesCircle[i].classList.add('checked')
            }
        }

    }

}

var pontuacaoGlobal;

function finalizarQuiz() {
    const respostas = document.querySelectorAll(".input-radio")
    var numeroPerguntas = 10;
    for (let i = 0; i < respostas.length; i++) {
        if (respostas[i].checked) {
            numeroPerguntas--
        }
    }

    if (numeroPerguntas != 0) {
        return alert("Responda todas as perguntas antes de finalizar")
    }

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

    var listaPerguntas = [pergunta_01, pergunta_02, pergunta_03, pergunta_04, pergunta_05, pergunta_06, pergunta_07, pergunta_08, pergunta_09, pergunta_10]

    var comico = 0;
    var dramatico = 0;
    var melodramatico = 0;
    var musical = 0;
    var improviso = 0;

    for (let i = 0; i < listaPerguntas.length; i++) {
        if (listaPerguntas[i] == 1) {
            comico += 5;
            dramatico += 2;
            melodramatico += 3;
            musical += 1;
            improviso += 3;
        } else if (listaPerguntas[i] == 2) {
            comico += 1;
            dramatico += 5;
            melodramatico += 3;
            musical += 2;
            improviso += 3;
        } else if (listaPerguntas[i] == 3) {
            comico += 3;
            dramatico += 3;
            melodramatico += 5;
            musical += 3;
            improviso += 2;
        } else if (listaPerguntas[i] == 4) {
            comico += 3;
            dramatico += 2;
            melodramatico += 4;
            musical += 5;
            improviso += 1;
        } else if (listaPerguntas[i] == 5) {
            comico += 4;
            dramatico += 3;
            melodramatico += 2;
            musical += 2;
            improviso += 5;
        }
    }

    const perfil = ["Cômico", "Dramático", "Melodramático", "Musical", "Improviso"]
    var pontuacao = []
    pontuacao.push(comico);
    pontuacao.push(dramatico);
    pontuacao.push(melodramatico);
    pontuacao.push(musical);
    pontuacao.push(improviso);


    var maiorPontuacao = 0;
    var maiorPontuacaoIndice;

    for (let i = 0; i < pontuacao.length; i++) {
        if (pontuacao[i] > maiorPontuacao) {
            maiorPontuacao = pontuacao[i];
            maiorPontuacaoIndice = i;
        }
    }

    for (let i = 0; i < pontuacao.length; i++) {
        if (pontuacao[i] == maiorPontuacao && maiorPontuacaoIndice != i) {
            pontuacao[maiorPontuacaoIndice] = pontuacao[maiorPontuacaoIndice] + 5
        }
    }


    pontuacaoGlobal = pontuacao;
    sessionStorage.NOVOPERFIL = maiorPontuacaoIndice + 1;

    console.log("total" + " cômico: " + comico + " dramático: " + dramatico + " melodramático: " + melodramatico + " musical: " + musical + " improviso: " + improviso);

    if (sessionStorage.PERFIL == "null") {
        cadastrarPontuacao();
        sessionStorage.PERFIL = maiorPontuacaoIndice + 1;
    } else {
        atualizarPontuacao();
    }
}



function cadastrarPontuacao() {
    var idUsuario = sessionStorage.ID_USUARIO;
    var corpo = {
        comico: pontuacaoGlobal[0],
        dramatico: pontuacaoGlobal[1],
        melodramatico: pontuacaoGlobal[2],
        musical: pontuacaoGlobal[3],
        improviso: pontuacaoGlobal[4],
        fkPerfil: sessionStorage.NOVOPERFIL,
        fkUsuario: sessionStorage.ID_USUARIO
    }

    fetch(`http://localhost:3333/quiz/cadastrar`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Post realizado com sucesso pelo usuario de ID: " + idUsuario + "!");
            window.location = "/dashboard/resultado.html";
            finalizarAguardar();
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
    });

    return false;

}

function atualizarPontuacao() {
    var idUsuario = sessionStorage.ID_USUARIO;
    var corpo = {
        comico: pontuacaoGlobal[0],
        dramatico: pontuacaoGlobal[1],
        melodramatico: pontuacaoGlobal[2],
        musical: pontuacaoGlobal[3],
        improviso: pontuacaoGlobal[4],
        fkPerfil: sessionStorage.NOVOPERFIL,
        fkUsuario: sessionStorage.ID_USUARIO
    }

    fetch(`http://localhost:3333/quiz/atualizar`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Post realizado com sucesso pelo usuario de ID: " + idUsuario + "!");
            window.location = "/dashboard/resultado.html";
            finalizarAguardar();
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
    });

    return false;

}