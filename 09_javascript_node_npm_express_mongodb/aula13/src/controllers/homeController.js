// onde eu crio os controladores
const paginaInicial = (req, res) => {
    res.render('index')
    return
}

const paginaFinal = (req, res) => {
    res.send(req.body)
    return
}

export { paginaInicial, paginaFinal }