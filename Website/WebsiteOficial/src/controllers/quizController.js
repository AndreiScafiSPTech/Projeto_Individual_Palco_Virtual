var quizModel = require("../models/quizModel");

function cadastrarPontuacao(req, res) {
    var comico = req.body.comico;
    var dramatico = req.body.dramatico;
    var melodramatico = req.body.melodramatico;
    var musical = req.body.musical;
    var improviso = req.body.improviso;
    var fkPerfil = req.body.fkPerfil;
    var fkUsuario = req.body.fkUsuario

    quizModel.cadastrarPontuacao(comico, dramatico, melodramatico, musical, improviso, fkPerfil, fkUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

};


function atualizarPontuacao(req, res) {
    var comico = req.body.comico;
    var dramatico = req.body.dramatico;
    var melodramatico = req.body.melodramatico;
    var musical = req.body.musical;
    var improviso = req.body.improviso;
    var fkPerfil = req.body.fkPerfil;
    var fkUsuario = req.body.fkUsuario

    quizModel.atualizarPontuacao(fkUsuario, comico, dramatico, melodramatico, musical, improviso, fkPerfil)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
};

module.exports = {
    cadastrarPontuacao,
    atualizarPontuacao
}