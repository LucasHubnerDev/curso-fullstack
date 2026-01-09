// Reduce
// usado para reduzir o array em um valor só


const numeros = [1, 2, 3, 4, 5]
const sum = numeros.reduce((acc, numero) => numero + acc, 0)
const sumPares = numeros.filter((n) => n % 2 === 0).reduce((acc, numero) => numero + acc, 0)
const sumParesDuplicado = numeros.filter((n) => n % 2 === 0).map((n) => n * 2).reduce((acc, numero) => numero + acc, 0)

console.log(numeros, sum, sumPares, sumParesDuplicado)

const pessoas = [
    { nome: "lucas", idade: 17 },
    { nome: "ana", idade: 22 },
    { nome: "bianca", idade: 51 },
    { nome: "carlos", idade: 14 },
    { nome: "davi", idade: 56 },
    { nome: "jackson", idade: 57 },
]

const maisVelho = pessoas.reduce((acc, currentValue) => {
    if(currentValue.idade <= acc.idade) return acc
    return currentValue
}, 0)

console.log(maisVelho)