// For - Clássico - Estrutura de repetição

// primeiramente eu passo o valor inicial e depois a condição para a estrutura continuar rodando e depois o processo enquanto a condição for verdadeira
// for(let i = 1; i <= 10; i++) {
//     console.log(i)
// }

const frutas = ["banana", "maçã", "laranja", "morango", "pokãn"]

// percorrendo um array com for
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
// }

// estrutura do for:
// for(variável de controle; condição de parada; incremento ou decremento da variável de controle)

// posso mudar o fluxo do for
// for(let i = 100; i >= 50; i--) {
//     console.log(i)
// }

// posso colocar uma operação no incremento
// exemplo com somente números pares
// for(let i = 1; i <= 10; i = i % 2 === 0 ? i + 2: i + 1) {
//     console.log(i)
// }

// exemplo com somente números ímpares
// for(let i = 1; i <= 10; i = i % 2 !== 0 ? i + 2: i + 1) {
//     console.log(i)
// }

// exemplo com números pares e ímpares
let impares = []
let pares = []

for(let i = 1; i <= 50; i++) {
    if(i % 2 === 0) {
        pares.push(i)
    } else {
        impares.push(i)
    }
}

console.log(impares)
console.log(pares)