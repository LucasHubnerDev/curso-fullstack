// break e continue
// funciona em qualquer tipo de laço

// continue faz o laço de repetição pular o ciclo atual, ignorando o código restante dentro do loop
// break pode ser usado para interromper totalmente um laço de repetição infinito, ou quando algum resultado esperado é alcançado.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros) {
    if(numero % 2 !== 0) continue
    console.log(`número par:0${numero}`)
}

for (let numero of numeros) {
    if(numero === 7) {
        console.log(`o número ${numero} foi achado, laço de repetição interrompido.`)
        break
    }
    console.log("procurando número 7")
}