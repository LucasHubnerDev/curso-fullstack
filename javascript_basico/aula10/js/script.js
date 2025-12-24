/** OPERADORES ARITMÉTICOS
 * 2 + 2  -> Adição / Concatenação
 * 2 - 2  -> Subtração
 * 2 * 2  -> Multiplicação
 * 2 / 2  -> Divisão
 * 2 ** 2 -> Potenciação
 * 2 % 2  -> Resto da divisão
 * ++     -> Incremento
 * --     -> Decremento
 */

const num1 = 5;
const num2 = 10;

// Adição
const result1 = num1 + num2;
console.log(result1); // 15

// Subtração (string é convertida para número)
const num3 = "7";
const result2 = num2 - num3;
console.log(result2); // 3

// Concatenação (string + number)
const result3 = num3 + num1;
console.log(result3); // "75"

// Multiplicação
const result4 = num1 * num3;
console.log(result4); // 35

// Divisão
const result5 = num2 / num1;
console.log(result5); // 2

// Potenciação
const result6 = num1 ** 2;
console.log(result6); // 25

// Resto da divisão
const result7 = num2 % num1;
console.log(result7); // 0

// Incremento
let contador = 0;
contador++;
console.log(contador); // 1

++contador;
console.log(contador); // 2

// Decremento
contador--;
console.log(contador); // 1

--contador;
console.log(contador); // 0

// Nan - Not a number
const num4 = "l";
const num5 = 12;
const result8 = num5 * num4
console.log(result8)

// Convertendo uma string
// const num6 = parseInt("5"); // para números inteiros, ignora casas flutuantes
// const num6 = parseFloat("5.2"); // para números com casas decimais
const num6 = Number("5.2"); // forma mais moderna de conversão, ele lida automaticamente com o tipo de número. não tem como converter letras para número
const num7 = 7;

// Operadores aritméticos combinados
let total = 10;

total += 5; // total = 15
total -= 3; // total = 12
total *= 2; // total = 24
total /= 4; // total = 6
total %= 2; // total = 0
total **= 2; // total = 0

console.log(total);
