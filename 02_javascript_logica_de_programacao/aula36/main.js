const frutas = ["banana", "laranja", "melancia", "maçã", "tangerina"]
const pessoa = {
    nome: "lucas",
    sobrenome: "hubner",
    idade: 17
}

// for... in...
// usado para percorrer diretamente os índices de um array ou chaves em objetos

// for (let index in frutas){
//     console.log(index)
// }

// for (let chave in pessoa) {
//     console.log(chave)
// }

for(let i in frutas) {
    console.log(frutas[i])
}

for (let key in pessoa) {
    console.log(pessoa[key])
}