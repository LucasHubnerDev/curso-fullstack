// Express é um framework minimalista que facilita o processo de criação de servidores web e APIs de forma simples e organizada
import express from 'express';

// criando uma aplicação
// o app representa o servidor, as rotas e as middlewares
// app = todo o backend
const app = express()

// aqui estou definindo a porta por onde o servidor pode ser acessado
const port = 3000;

// criando uma rota
// definindo uma rota do tipo get, get é um método http usado para buscar dados
// req (request): tudo que chega do cliente (parâmetros, body, query, headers)
// res (response): tudo que o servidor envia de volta
app.get('/', (req, res) => {
    // res.send()
    // enviando uma resposta ao cliente
    // ao enviar a resposta a requisição termina
    res.send("hello friend")
})

app.get('/login', (req, res) => {
    res.send(`
        <form action="/login" method="POST">
        <input type="text" name="name" placeholder="nome"/>
        <input type="submit" value="enviar"/>
        </form>
    `)
})

app.post("/login", (req, res) => {
    res.send("login recebido")
})

// o primeiro parâmetro em get, put, post ou delete é a rota
// o segundo parâmetro é a callback
app.get('/suporte', (req, res) => {
    res.send("obrigado por entrar em contato com a gente")
})

// iniciando o servidor
// app.listen liga o servidor e faz o Node ficar escutando (aguardando) requisições na porta especificada
// parâmetros: port -> porta usada, callback -> código executando quando o servidor subir
app.listen(port, () => {
    console.log(`servidor executando na porta ${port}`)
    console.log(`você pode acessar em: http://localhost:${port}`)
})

// Métodos http - CRUD
// Post           Create  
// Get            Read  
// Put            Update
// Delete         Delete

// posso usar o node para rodar o servidor
// node server.js

// npm install --save-dev nodemon
// o nodemon é uma ferramente de desenvolvimento que serve para reiniciar automaticamente o servidor sempre que eu alterar algum arquivo do projeto

// script: nodemon server.js
// cmd: npx nodemon server.js