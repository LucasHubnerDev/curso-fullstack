import express from 'express'
const route = express.Router()

import { paginaFinal, paginaInicial } from './src/controllers/homeController.js'
import * as contato from './src/controllers/contatoController.js'

// Middleware é uma função que roda ANTES da rota final e precisa chamar next() para continuar.
// posso usar um middleware para guarda dados entre seções
// para interceptar dados e autenticalos
// const meuMiddleware = (req, res, next) => {
//     console.log("\npassando pelo middleware\n")
//     next()
// }

// route.get('/', meuMiddleware,paginaInicial, function(req,res,next) {
//     console.log("adeus cliente")
//     next()
// })

route.get('/', paginaInicial)
route.post('/', paginaFinal)

// rotas contato
route.get("/contato", contato.paginaInicial)
route.post("/contato", contato.paginaFinal)

export default route