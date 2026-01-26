// onde eu crio os controladores
const paginaInicial = (req, res) => {
    res.render('index')
}

const paginaFinal = (req, res) => {
    res.send("dados sendo processados")
}

export { paginaInicial, paginaFinal }