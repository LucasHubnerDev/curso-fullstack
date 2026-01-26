import express from 'express'
import routes from './routes.js'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { env } from './config/env.js'
import { connectDB } from './config/db.js'
import { saveData } from './src/middlewares/save.js'

const app = express()

// paths
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'public')))

// views
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

// middleware global
app.use(saveData)
app.use(routes)

// conexão + start
try {
  await connectDB(env.mongoUri)
  app.listen(env.port, () => {
    console.log(`Servidor rodando na porta ${env.port}`)
    console.log(`http://localhost:${env.port}`)
  })
} catch (error) {
  console.error('Erro ao conectar no MongoDB:', error.message)
  process.exit(1)
}
