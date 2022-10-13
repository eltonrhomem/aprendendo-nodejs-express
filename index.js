const express = require('express')
const app = express()
const Alunos = require('./Controlllers/alunosController')



app.get('/alunos/:id',  (request, response) => {
      Alunos.obterAluno(request, response)
})






app.listen(4000, () => console.log('Servidor rodando na porta 4000'))