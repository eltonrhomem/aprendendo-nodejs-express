import alunos from '../models/escolas.js'



async function obterEscola (requisicao, resposta){
    try {
        const {cdtipesc, cdescola} = requisicao.params
        const aluno = await alunos.findAll({
            where: {
                cdtipesc,
                cdescola
            }
        })
        resposta.status(200).json(aluno) 
    }
    catch(erro) {
        resposta.status(500).json(erro) 
    }
}

export default {
    obterEscola
}