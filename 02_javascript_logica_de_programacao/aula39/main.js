// While e DO While

// variáveis de controle
let startNumber = 0;
let limitNumber = 10

// while é um laço de repetição que executa enquanto uma condição for verdadeira

// while(startNumber <= limitNumber) {
//     console.log(startNumber)
//     startNumber++
// }

// do... while... um laço de repetição que executa pelo menos uma vez e verifica depois se deve continuar ou não o laço

// do {
//     console.log(startNumber)
//     startNumber++
// } while (startNumber >= limitNumber)

// const nome = "lucas"

// while (startNumber < nome.length) {
//     console.log(nome[startNumber])
//     startNumber++;
// }

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

let max = 20
let min = 5
let rand = randomNumber(min, max);

// while (rand !== 10) {
//     rand = randomNumber(min, max)
//     console.log(rand)
// }

do {
    rand = randomNumber(min, max)
    console.log(rand)
} while (rand !== 10)