var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController")

//Recebendo os dados do html e direcionando para a função cadastrar de resultadoController.js

router.get("/listar/:idUsuario", function (req, res) {
    resultadoController.listarPorUsuario(req, res);
});

router.get("/listar", function (req, res) {
    resultadoController.listarUsuarios(req, res);
});

module.exports = router;