// Filter
// retorna um novo array com todos elementos que cumpriram a condição
const numeros = [0, 1, "2", 3, 4, 5, 6, 7, 8, 9, 10, "abc"]
// const pares = numeros.filter(n => n % 2 === 0)
// const impares = numeros.filter(n => n % 2 !== 0)
// const leftNumbers = numeros.filter(n => n < 5)
// const rightNumbers = numeros.filter(n => n > 5)
// console.log(pares, impares, leftNumbers, rightNumbers) 

const callbackFilter = (value, type) => {
    let condicao;
    const numero = Number(value)
    if (!numero || Number.isNaN(numero)) {
        return false
    }

    switch (type) {
        case "par":
            condicao = numero % 2 === 0
            break
        case "impar":
            condicao = numero % 2 !== 0
            break
        default:
            condicao = true
    }
    return condicao
}

const typeFilter = 'par'
const filtro = numeros.filter(n => callbackFilter(n, typeFilter))
// console.log(filtro)

const callBackSort = (objeto) => {

}

const pessoas = [
    { nome: "lucas", idade: 17 },
    { nome: "ana", idade: 22 },
    { nome: "bianca", idade: 51 },
    { nome: "carlos", idade: 14 },
    { nome: "davi", idade: 56 },
    { nome: "jackson", idade: 56 },
]

const callbackFilterPessoas = ({ nome, idade }, type) => {
    switch (type) {
        case 0:
            return nome.length >= 5
        case 1:
            return idade > 50
        case 2:
            // método endsWith para verificar se uma string termina com determinado caracter
            return nome.toLowerCase().endsWith("a")
        default:
            return false
    }
}

const callbackForEach = ({ nome, idade }) => {
    console.log(`nome:${nome}, idade:${idade}`)
}

const code = Math.floor(Math.random() * 3)
if (code === 0) console.log("filtrando por tamanho")
else if (code === 1) console.log("filtrando por idade")
else if (code === 2) console.log("filtrando por terminação em a")
const filtroPessoas = pessoas.filter((pessoa) => callbackFilterPessoas(pessoa, code)).sort((a, b) => a.idade - b.idade).forEach((pessoa) => callbackForEach(pessoa))