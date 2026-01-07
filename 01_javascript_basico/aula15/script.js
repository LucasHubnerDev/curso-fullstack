// Objeto Math

let num1 = 9.543

// Math.floor(x)
// arredonda para baixa
let num2 = Math.floor(num1)

// Math.ceil(x)
// arredonda para cima
let num3 = Math.ceil(num1)

// Math.round(x)
// arredonda para o inteiro mais próximo
let num4 = Math.round(num1)
// console.log(num2, num3, num4)

// Math.max(...values)
// retorna o maior número entre as expressõe numéricas passadas
const numbers = [1, 7, -5, 9, 0, -9]
// console.log(Math.max(...numbers))

// Math.min(...values)
// retorna o menor número entre as expressõe numéricas passadas
// console.log(Math.min(...numbers))

// Math.random()
// gera números entre 0 e 1
// nunca vai gerar 1
const randomNumber = Math.floor(Math.random() * (10 - 5) + 5)
console.log(randomNumber)

// Math.PI
// valor de PI
console.log(Math.PI)

// Math.pow(x, y)
// x = value; y = expoent
console.log(Math.pow(5, 2)) 
// ou
console.log(5 ** 2)

// Math.sqrt(x)
// raiz quadrada de x
console.log(Math.sqrt(16))
// ou
// console.log(x ** (1/2))

console.log(100/0) // infinity