// Métodos úteis para objetos

// Review
// Object.freeze()
// congela um objeto

// Object.properties()
// defini várias propriedade

// Object.property()
// defini uma propriedade

// Object.keys()
// retornar um array contendo as chaves do objeto

const produto = { nome: "shampoo", preco: 80 }

// passando valor por referência
const produtoRef = produto

// copiando um objeto de forma simples
const copy1 = { id: Date.now(), ...produto }

// copiando com o método assign
// com assign eu posso inserir vários objetos dentro de 1 só
// primeiro argumento é onde eu vai ser colocado os valores
// e o resto são as sources a serem jogadas no target
// Object.assign(target, ...source)
const copy2 = Object.assign({}, { id: Date.now() }, produto)
// console.log(copy2)

// Object.getOwnPropertyDescriptor()
// método que esse a configuração de uma propriedade
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

// método keys me retorna um array com todas as chaves de um objeto
console.log(Object.keys(produto))

// método values me retorna um array que contém o valor de todas propriedades dentro de um objeto
console.log(Object.values(produto))

// método entries me retornar um array de arrays de propriedade
console.log(Object.entries(produto))

for(let [key, value] of Object.entries(produto)) {
    console.log(key, value)
}