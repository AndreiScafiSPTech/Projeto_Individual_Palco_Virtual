var database = require("../database/config");

function cadastrarPontuacao(comico, dramatico, melodramatico, musical, improviso, fkPerfil, fkUsuario) {
    var instrucaoSql = `
    INSERT INTO pontuacao (idPontuacao, comico, dramatico, melodramatico, musical, improviso, fkPerfil, fkUsuario ) VALUES ('${fkUsuario}', '${comico}', '${dramatico}', '${melodramatico}', '${musical}', '${improviso}', '${fkPerfil}', '${fkUsuario}');
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarPontuacao(fkUsuario, comico, dramatico, melodramatico, musical, improviso, fkPerfil) {
    var instrucaoSql = `
    UPDATE pontuacao SET comico = '${comico}', dramatico = '${dramatico}', melodramatico = '${melodramatico}', musical = '${musical}', improviso = '${improviso}', fkPerfil = '${fkPerfil}' WHERE fkUsuario = '${fkUsuario}'
    `
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarPontuacao,
    atualizarPontuacao
};