import express from 'express'
import routes from './routes.js'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// posso criar middlewares globais
import { saveData } from './src/middlewares/save.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// pasta de conteúdo estático
app.use(express.static(path.resolve(__dirname, 'public')))

// defininindo onde se encontra os arquivos
app.set('views', path.resolve(__dirname, 'src', 'views'))

// configurando uma view engine
// uma view engine permite a presença de lógica imbutida ao html
app.set('view engine', 'ejs')

// assim meu middleware global vai interagir com todas as rotas
app.use(saveData)
app.use(routes)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
  console.log(`pode acessar em http://localhost:${port}`)
})
