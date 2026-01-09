// Filter + Map + Reduce

const numeros = [1, 2, 3, 4, 5]
const sum = numeros.reduce((acc, numero) => numero + acc, 0)
const sumPares = numeros.filter((n) => n % 2 === 0).reduce((acc, numero) => numero + acc, 0)
const sumParesDuplicado = numeros.filter((n) => n % 2 === 0).map((n) => n * 2).reduce((acc, numero) => numero + acc, 0)