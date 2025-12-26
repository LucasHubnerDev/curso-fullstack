/**
 * Primitivos (imutáveis) -> string, number, boolean, undefined, null (bigint, symbol)
 */
// let nome ="Lucas"
// nome = "Hubner"

// em dados primitivos
let a = "a";
let b = a; // apenas copiou o valor de a

a = "outra coisa"
console.log(a, b)

// referência (mutável) - Arrays, Object, function - dados passados por referência
let c = [1, 2, 3]
let d = c // d está referenciando c, é como se d fosse um atalho para modificar c, ambos apontam para o mesmo local na memória

c.push(4)

console.log(c, d)

// como copiar valores mutáveis, usando spred operator
let e = [...d]

// em dados não primitivos, são passados por referência
// em dados primitivos, são copiados