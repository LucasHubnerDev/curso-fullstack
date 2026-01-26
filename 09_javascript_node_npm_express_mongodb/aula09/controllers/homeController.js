// onde eu crio os controladores
const paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
        <input type="text" name="name" placeholder="nome"/>
        <input type="submit" value="enviar"/>
        </form>
    `)
}

const paginaFinal = (req, res) => {
    res.send("dados sendo processados")
}

export { paginaInicial, paginaFinal }