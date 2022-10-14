import express from 'express'
const router = express.Router();


import Alunos from '../Controlllers/alunosController.js'



router.get('/alunos/:id',  (request, response) => {
      Alunos.obterAluno(request, response)
})

export default router