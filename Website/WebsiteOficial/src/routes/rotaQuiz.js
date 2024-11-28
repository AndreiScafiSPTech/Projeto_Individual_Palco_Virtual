var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController")

//Recebendo os dados do html e direcionando para a função cadastrar de quizController.js

router.post("/cadastrar", function (req, res) {
    quizController.cadastrarPontuacao(req, res);
});

router.post("/atualizar", function (req, res) {
    quizController.atualizarPontuacao(req, res);
});

module.exports = router;