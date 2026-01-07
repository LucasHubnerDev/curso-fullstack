// Retorno da função
// funções pode ou não retornar algo

// essa função retorna um valor
// function soma(a, b) {
//     return a + b
// }

// console.log(soma(5, 2))

// já essa função executa uma ação
// ela não retorna nada
// function soma2(a, b) {
//     console.log(a + b)
// }

// soma2(5, 2)

// exemplo de função que não retorna nada, mas faz alguma coisa
// document.addEventListener("click", () => {
//     document.body.style.backgroundColor = 'red'
// })

// class Pessoa {
//     constructor(nome, sobrenome, idade) {
//         this.name = nome;
//         this.surname = sobrenome;
//         this.age = idade
//     }

//     get() {
//         console.log(this.name, this.surname, this.age)
//     }
// }

// const pessoa1 = new Pessoa("lucas", "hubner", 17)
// pessoa1.get()

// function createObject (nome, sobrenome) {
//     return { nome, sobrenome}
// }

// function createJSONObject (object) {
//     return JSON.stringify(object)
// }

// const p1 = createObject("lucas", "hubner")
// const p1JSON = createJSONObject(p1)
// console.log(p1)
// console.log(p1JSON)

// numa função eu posso retornar outra função
// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco + " " + resto
//     }

//     return falaResto
// }

// const fala1 = falaFrase("meu nome é")
// console.log(fala1)
// const fala2 = fala1("lucas")
// console.log(fala2)

// function duplica(n) {
//     return n * 2
// }

// function triplica(n) {
//     return n * 3
// }

// function quadriplica(n) {
//     return n * 4
// }

// função closure
function criaMultiplicador (multiplicador) {
    //multiplicador
    function multiplicacao(n) {
        return n * multiplicador
    }
    return multiplicacao
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)


console.log(duplica(3), triplica(2))

function contador () {
    let count = 0

    return function () {
        count++;
        return count
    }
}

const incrementar = contador()

console.log(incrementar())
console.log(incrementar())
console.log(incrementar())