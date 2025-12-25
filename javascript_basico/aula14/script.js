let num1 = 1500; // number
let num2 = 250.5; // number
let num3 = 20.141431;

// console.log(num1.toString() + num2);

// convertendo de number para string
// num1 = num1.toString();

// passando argumento 2 para toString, vai me retornar a versão binária do número
// console.log(num1.toString(2))
// console.log(num2.toString(2))

// método toFixed()
// número de casas decimais
// console.log(num3.toFixed(2))

// verifacar se um número é um inteiro
// console.log(Number.isInteger(num1));

// verificar se valor é um número ou não
// console.log(Number.isNaN(num1));

// Em JavaScript, todos os números do tipo `number` usam o padrão IEEE 754 (64 bits).
// Esse padrão NÃO consegue representar com exatidão vários números decimais,
// como 0.1, 0.2, 0.7, etc. Eles são armazenados como aproximações binárias.

let num4 = 0.7
let num5 = 0.1

// Cada soma acumula um pequeno erro de precisão binária
num4 += num5 // internamente: 0.7999999999999999
num4 += num5 // internamente: 0.8999999999999999
num4 += num5 // internamente: 0.9999999999999999 (parece 1, mas NÃO é)

// Mesmo parecendo 1, esse valor não é exatamente um inteiro
// console.log(Number.isInteger(num4)) // false

// toFixed(2) arredonda o número para 2 casas decimais,
// MAS retorna uma STRING, não um number
// Exemplo: "1.00"
// num4 = num4.toFixed(2)

// Converter a string para number corrige o problema,
// pois agora o valor passa a ser exatamente 1 em binário
// num4 = parseFloat(num4.toFixed(2))
num4 = Number(num4.toFixed(2))

console.log(num4) // 1

// 1.00 é tratado como número inteiro em JavaScript
console.log(Number.isInteger(1.00)) // true

// Agora num4 também é realmente um inteiro
console.log(Number.isInteger(num4)) // true

// outra forma de resolver esse problema
num6 = 0.7
num7 = 0.1

num6 = ((num6 * 100) + (num7 * 100)) / 100
console.log(num6)

