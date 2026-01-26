export const paginaInicial = (req, res) => {
    res.send(`
        <form action="/contato" method="POST">
        <input type="text" name="name" placeholder="qual o problema?"/>
        <input type="submit" value="enviar"/>
        </form>
    `)
}

export const paginaFinal = (req, res) => {
    res.send("obrigado pelo avizo")
}