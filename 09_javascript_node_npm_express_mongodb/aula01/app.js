// importando modulos no node de forma antiga (commonJS)
const path = require("path")
const axios = require("axios")
const { Pessoa } = require("./modulo1")

const p1 = new Pessoa("L", "H", 17)

axios('https://github.com/Maujor/json/blob/master/db.json')
.then((response) => {
    console.log(response.data)
})
.catch(err => {
    console.log("a busca falhou")
})