const conexao = require('../sequelize')
const alunos = require('../models/alunos')



exports.obterAluno = async (requisicao, resposta) => {
    try {
        const {id} = requisicao.params
        const aluno = await alunos.findByPk(id)
        resposta.status(200).json(aluno) 
    }
    catch(erro) {
        resposta.status(500).json(erro) 
    }
}