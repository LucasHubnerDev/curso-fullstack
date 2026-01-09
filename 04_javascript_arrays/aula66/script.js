// Método map
// usado para transformar arrays
// não modifica o array original

const numeros = [1, 2, 3, 4, 5]

const callbackMap = (number, multiply) => {
    const multiplicador = (multiplicador) => {
        return function (x) {
            return x * multiplicador
        }
    }

    const m1 = multiplicador(multiply)
    return m1(number)
}

const numerosD = numeros.map(n => callbackMap(n, 2))
const numerosT = numeros.map(n => callbackMap(n, 3))
const numerosQ = numeros.map(n => callbackMap(n, 4))
console.log(numerosD, numerosT, numerosQ)

const pessoas = [
    { nome: "lucas", idade: 17 },
    { nome: "ana", idade: 22 },
    { nome: "bianca", idade: 51 },
    { nome: "carlos", idade: 14 },
    { nome: "davi", idade: 56 },
    { nome: "jackson", idade: 56 },
]

// const nomes = pessoas.map(n => n.nome).forEach((nome) => console.log(nome))
// pessoas.forEach((pessoa) => {
//     pessoa.id = Date.now()
// })

// console.log(pessoas)

// const nomes = pessoas.map(obj => obj.nome)
// const idades = pessoas.map(obj => ({ idade: obj.idade }))
// console.log(nomes)
// console.log(idades)

const ids = pessoas.map((pessoa) => {
    return {
        id: Date.now(),
        ...pessoa
    }
})

console.log(ids)
console.log(pessoas)