import express from 'express';

const app = express()
const port = 3000;

// tratando req.body
// sem isso o meu app não vai esperar pelo envio de dados pelo form
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
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
    // req.body
    // corpo da requisição
    console.log(req.body)
    res.send('formulário sendo processado')
})

// colocando paramêtros na rota usando :
// para o parâmetro ser opcional devo envolvelo em chaves {param}
// query strings -> /?nome=lucas&sobrenome=hubner
app.get('/teste{/:id}', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    // res.send(req.params.id ?? "nenhum argumento passado para a url")

    // acessando a query string
    res.send(req.query.nome)
})

app.listen(port, () => {
    console.log(`servidor executando na porta ${port}`)
    console.log(`você pode acessar em: http://localhost:${port}`)
})