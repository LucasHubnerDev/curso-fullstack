// criando um array
// array é uma lista ordenada de valores
const numeros = [1, 2, 3, 4, 5]

// outra forma de cria um array
const sites = new Array("google.com", "firefox.com", "breave.com")

// forEach
// percorre o array mas não retorana nada
// devo usar quando eu querer executar algo para cada item (elemento) dessa lista ordenada de valores (array)
numeros.forEach((value, index, arrayCompleto) => {
    console.log(`${index}:${value}°`)
})

// map
// usado para criar um novo array, transformando os valores
const dobro = numeros.map(n => n * 2)
console.log(numeros, dobro)

// filter
// usado para criar um novo array com os elementos que passam na condição
// devo usar quando for necessário filtrar dados
const pares = numeros.filter(n => n % 2 === 0)

// reduce
// usado para reduzir o array em um único valor
// muito usado para soma, média, agrupar objetos e contar ocorrências
const soma = numeros.reduce((acc, num) => acc + num, 0)
console.log(soma)

// find
// retorna o primeiro elemento que satisfaz uma condição
const encontrado = numeros.find(n => n === 3)
console.log(encontrado)

// findIndex
// Retorna o índice do primeiro elemento que satisfaz a condição encontrado
const index = numeros.findIndex(n => n % 2 === 0)
console.log(numeros[index])

// some
// usado para verificar se algum elemento passa na condição
const existe = numeros.some(n => n > 5)
console.log(existe)

// every
// verifica se todos elementos passam na condição
const numerosPositivos = numeros.every(n => n > 0);
console.log(numerosPositivos)

// includes
// usado para verificar se o array contém um valor
console.log(numeros.includes(3))

// push e pop
// push usado para adicionar um elemento no final do array
// pop usado para remover um elemento ao final do array
// modificam o array original
numeros.push(6)
numeros.pop()

// shift e unshift
// shift remove o primeiro elemento de um array
// unshift adiciona um novo elemento no ínicio do array
// também modifica o array original
numeros.unshift(0)
numeros.shift()

// slice
// usado para copiar parte de um array
// não modifica o array original
const parteParcial = numeros.slice(0, 2)
console.log(parteParcial)

// splice
// remove e adiciona elementos
// altera o array original
// array.splice(inicio, quantidade, item1, item2, ...)
numeros.splice(2, 1); // remove 1 elemento no índice 2
numeros.splice(2, 0, 3) // insere um elemento no indice 2
numeros .splice(4, 1, 5, 6) // remove um elemento a partir do index 4 e adiciona mais dois elementos
console.log(numeros)

// sort
// usado para ordenar um array
// sem função de comparação ele ordena como string
// modifica o array original
const nuns = [2, 10, 1, 20]

// ordem crescente
nuns.sort((a, b) => a - b) 
console.log(nuns)

// ordem decrescente
nuns.sort((a, b) => b - a)
console.log(nuns) 
