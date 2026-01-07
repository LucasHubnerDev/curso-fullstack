// ao declarar funções com function, é disponibilizado a variável arguments
// eu posso passar argumentos mesmo não tendo parâmetros na função
// todos argumentos passados na chamada da função, vão ser guardados dentro da variável arguments
// declarações com function tem uma variável especial chamada arguments, que sustenta todos os argumentos enviados na chamada da função

// function funcao(nome) {
//     console.log(`hello ${arguments[0]}`)
//     console.log(arguments)

// }
// funcao("lucas", 1, 2, 3)

// function sum () {
//     let total = 0
//     for(let argumento of arguments) {
//         total += argumento
//     }
//     return total
// }

// const nPares = sum(2,4,6,8,10)
// console.log(nPares)

// parâmetros sem argumentos, ficam com undefined
// function funcao(a,b,c,d,e) {
//     console.log(a,b,c,d,e)
// }

// funcao(1,2,3)

// eu posso adicionar um valor padrão aos parâmetros caso não seja passado nenhum argumento
// function soma (a, b = 0, c = 4) {
//     console.log(a + b + c)
// }

// soma(2)
// soma(5,10)
// soma(5, "", 10)
// soma(3, null, 21)

// atribuição via desestruturação com funções
// function funcao({ nome, sobrenome, idade }) {
//     console.log(nome, sobrenome, idade)
// }
// enviando um objeto literal como argumento
// let pessoa = { nome: "lucas", sobrenome: "hubner", idade: 17 }
// funcao(pessoa)

// atribuição via desestruturação com arrays em funções
// let frutas = ["maçã", "banana", "melancia"]

// function menu ([fruta1, fruta2, fruta3]) {
//     console.log(fruta1, fruta2, fruta3)
// }

// menu(frutas)

function conta(operator, initialValue, ...values) {
    const sum = values.reduce((accumulator, currentValue) => {
        if (operator === "+") {
            return accumulator + currentValue
        }
        else if (operator === "-") {
            return accumulator - currentValue
        }
        else if (operator === "*") {
            return accumulator * currentValue
        }
        else if (operator === '/') {
            return accumulator / currentValue
        }
        else if (operator === '**') {
            return accumulator ** currentValue
        }
    }, initialValue)
    console.log(sum)
}

conta("+", 0, 2, 4, 6, 8, 10)
conta("-", 200, 10, 20, 20)