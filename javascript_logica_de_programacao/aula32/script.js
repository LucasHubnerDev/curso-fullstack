// Atribuição via desestruturação de arrays

// let a = "A";
// let b = "B";
// let c = "C";

// const valores= [b, c, a];
// [a, b, c] = valores;

// console.log(a,b,c)

// índices ->    0   1   2   3   4   5   6   7
const numeros = [10, 20, 30, 40, 50, 60, 70, 80];

// const primeiroNumero = numeros[0]
// console.log(primeiroNumero)

// vou pegar os números por ordem
// posso pular índices simplesmente deixando vazio
// ... rest operator para juntar os valores em uma instância só ou spread operator para espalhar os valores de um array ou objeto
const [primeiroNumero, segundoNumero, , ...resto] = numeros

console.log(primeiroNumero, segundoNumero, resto)

//  ... rest, ... spread

const matriz = [
//      0
//   0  1  2
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

// rest operator para juntar os elementos restantes em uma única variável
const [primeiroArray, ...arrays] = matriz
const [um, dois, tres] = primeiroArray

console.log(um, dois, tres, arrays)