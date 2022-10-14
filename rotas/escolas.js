import express from 'express'
const router = express.Router();


import Escolas from '../Controlllers/escolasController.js'



router.get('/escolas/:cdtipesc/:cdescola',  (request, response) => {
      Escolas.obterEscola(request, response)
})


export default router