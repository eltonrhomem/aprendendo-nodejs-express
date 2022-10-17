import 'dotenv/config'
import express from 'express'
import rotasAlunos from './rotas/alunos.js'
import rotasEscolas from './rotas/escolas.js'


const app = express()
app.use(express.json())


app.use(rotasAlunos, 
        rotasEscolas
        )




app.listen(4000, () => console.log('Servidor rodando na porta 4000'))