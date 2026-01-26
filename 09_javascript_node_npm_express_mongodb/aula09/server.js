import express from 'express';
import routes from './routes.js';

// server.js
// onde eu configuro o servidor

const app = express()
const port = 3000;

app.use(express.urlencoded({extended:true}))
app.use(routes)

app.listen(port, () => {
    console.log(`servidor executando na porta ${port}`)
    console.log(`você pode acessar em: http://localhost:${port}`)
})