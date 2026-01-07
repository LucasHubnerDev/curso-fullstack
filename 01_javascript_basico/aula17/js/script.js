// função é um trecho de código que tem uma finalidade específica
// tudo dentro do corpo da função está protegido, não pode ser acessado pelo escopo superior(maior)
// funções podem retornar um dado que pode ser usado por outro, dependendo do contexto.

// estrutura -> function nome(paramêtros) {corpo}
// function welcome(nome) {
//     console.log(`seja bem vindo ${nome}`)
// }

// chamando a função
// estrutura: nome(argumentos(args) caso a função tenha parâmetros)
// welcome("Lucas")

// exemplo de função que retorna algo
function mensagem(nome) {
    const msg = `seja bem vindo ${nome}`
    return msg
}
// const nome = prompt("qual o seu nome?")
// const msg = mensagem(nome)

// console.log(msg)

// uma função pode ou não retornar um valor
// posso passar valores padrão para os parâmetros caso não seja passado nenhum argumento na chamada da função.
function somar(x = 1, y = 9) {
    if (Number.isNaN(x) || Number.isNaN(y)) {
        return "argumentos inválidos"
    }

    // const soma = x + y;
    // return soma
    return x + y;
}

console.log(somar(2, 7))

// JavaScript tem escopo de bloco, tudo dentro do escopo de uma função está protegido. não pode ser acessado de outro escopo

// criando uma função anônima
const produto = function (x, y) {
    return x * y
}

// criando uma função com arrow function, forma mais moderna
// const raiz = (x) => {
//     return x ** 0.5
// }

// forma simplificada de arrow function
// automaticamente retorna o valor
const raiz = x => x ** 0.5