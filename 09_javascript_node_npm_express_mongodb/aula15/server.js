import express from 'express'
import routes from './routes.js'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { env } from './config/env.js'
import { connectDB } from './config/db.js'
// import { saveData } from './src/middlewares/save.js'

// express-session é um middleware do Express
// ele cria e gerencia sessões no servidor
// ele permite guardar dados do usuário no servidor enquanto ele navega pelo site
import session from 'express-session'

// connect-mongo é uma store para o express-session
// em vez de guardar sessões na memória local o MongoStore faz o session salvar esses dados no própio mongoDB
import MongoStore from 'connect-mongo'
// por padrão o session usa MemoryStore, ou seja, as sessões ficam salvas na ram e quando reiniciar todos esses dados coletados vão ser perdidos
// com express-session junto de connect-mongo as sessões ficam salvas no mongoDB, servidor pode reiniciar sem perder login

// flash
// um middleware que serve para guardar mensagens temporárias nas sessão
// ele permite enviar mensages de uma requisição para a próxima
import flash from 'connect-flash'


const app = express()

// paths
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
  secret: env.sessionSecret,
  store: MongoStore.create({
    mongoUrl: env.mongoUri,
    collectionName: 'sessions'
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
})

app.use(sessionOptions)
app.use(flash())

app.use((req, res, next) => {
  res.locals.messages = {
    success: req.flash('success'),
    error: req.flash('error'),
    info: req.flash('info')
  }
  next()
})



// views
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

// middleware global
// app.use(saveData)
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
