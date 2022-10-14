import alunos from '../models/alunos.js'



async function  obterAluno (requisicao, resposta) {
    try {
        const {id} = requisicao.params
        const aluno = await alunos.findByPk(id)
        resposta.status(200).json(aluno) 
    }
    catch(erro) {
        resposta.status(500).json(erro) 
    }
}

export default {
    obterAluno
}