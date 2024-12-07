var database = require("../database/config");

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
                        select 
                            comico, 
                            dramatico, 
                            melodramatico, 
                            musical, 
                            improviso,
                            nome,
                            titulo,
                            texto
                        from 
                            pontuacao 
                        join
                            perfil
                            on fkPerfil = idPerfil
                            where fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarUsuarios() {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
                       select
                            perfil.nome as perfil,
                            count(*) as usuarios
                        from 
                            usuario
                        join
                            pontuacao
                            on fkUsuario = usuario.idUsuario
                        join 
                            perfil
                            on fkPerfil = perfil.idPerfil
                        group by 
                            perfil.nome;
                            `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarPorUsuario,
    listarUsuarios
};