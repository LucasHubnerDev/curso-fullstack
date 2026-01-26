import express from 'express'
const route = express.Router()

// controllers
// onde eu importo todos os controladores
import { paginaFinal, paginaInicial } from './src/controllers/homeController.js'
import * as contato from './src/controllers/contatoController.js'

// onde eu defino as rotas e seus respectivos controllers
// rotas home
route.get('/', paginaInicial)
route.post('/', paginaFinal)

// rotas contato
route.get("/contato", contato.paginaInicial)
route.post("/contato", contato.paginaFinal)

export default route