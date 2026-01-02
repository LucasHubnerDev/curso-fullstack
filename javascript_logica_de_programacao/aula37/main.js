// for... of...

const nome = "lucas nascimento hubner"

// for of acessa diretamente o valor de cada índice
// for (let letra of nome) {
//     console.log(letra)
// }

// const nomes = ["stéfany", "samira", "alessandra"]
// for (let nome of nomes) {
//     console.log(nome)
// }

const pessoas = [
    {nome: "lucas", idade:17},
    {nome: "alexa", idade:17},
    {nome: "ana", idade:17},
]

for (let pessoa of pessoas) {
    console.log(pessoa.nome)
}

// O forEach é um método de arrays em JavaScript usado para percorrer todos os elementos de um array, um por um, executando uma função para cada item.
pessoas.forEach(function(item, indice, arrayCompleto) {
    console.log(item.nome, indice, arrayCompleto)
})

const pessoa = {
    nome: "Lucas",
    idade:17
}

for (let key in pessoa) {
    console.log(key)
}

// for of não funciona diretamente em objetos, ele não é iterável
// for (let key of pessoa) {
//     console.log(key)
// }

// For Clássico - Geralmente com iteráveis (array ou strings)
// For in - retorna o índice ou chave (string, array, ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)