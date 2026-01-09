// forEach
// só funciona em arrays
// não retorna nada
const numeros = [1, 2, 3, 4, 5]

let acc = 0
numeros.forEach(value => acc += value)
console.log(acc)