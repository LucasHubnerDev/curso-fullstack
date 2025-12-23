// const nome; // declara uma variável constante sem inicializar vai dar erro.

// const nome = 'lucas';

// nome = 'hubner'; // não posso realizar a reatribuição em constantes

// sempre usar constante quando o valor não deve ser mudado posteriormente.

const firstNumber = 5;
const outherNumber = 10;
const account = firstNumber + outherNumber;
const duplicate = account ** 2;

console.log(duplicate)
console.log(typeof duplicate);

const numberString = "5";
const numberNumber = 5;
let result = numberString + numberNumber; // lembre que o sinal de "+" tem duas funções em js (concatenar ou somar)
console.log(result)