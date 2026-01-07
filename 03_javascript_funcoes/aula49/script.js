// Declaração de função

// tradicional
// tem hoisting
function soma(x, y) {
    return x + y
}

// function expression
const produto = function (x, y) {
    return x * y
}

// arrow function
const dividir = (x,y) => {
    return x / y
}

// First-class objects (Objetos de primeira classe)
// funções podem ser tratadas como dados
// passadas para outras funções
const souUmDado = function () {
    console.log("Sou um dado")
}

function executaFuncao(funcao) {
    funcao()
}

executaFuncao(souUmDado)

const obj = {
    dizer: function () {
        console.log("estou dizendo")
    },
    falar() {
        console.log("estou falando")
    }
}