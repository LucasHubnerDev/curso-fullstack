// Revisando objetos

// criando um objeto literal
// const pessoa = {
//     id: Date.now(),
//     nome: "L",
//     sobrenome: "H"
// }

// keys
// método keys pertence ao objeto constructor, posso usalo para extrair todas as chaves de dentro de um objeto, as chaves extraídas são colocadas dentro de um array
// notação de colchete para acessar dinâmicamente as chaves
// notação de ponto para chaves estáticas
// Object.keys(pessoa).forEach((key) => {
//     console.log(pessoa[key])
// })

// for(let key in pessoa){
//     console.log(pessoa[key])
// }

// delete, para deletar uma propriedade
// delete pessoa.id

// propriedade engloba a chave e seu valor
// key é o nome da propriedade
// chave: value

// const pessoa1 = new Object()
// pessoa1.id = Date.now()
// pessoa1.nome = "L"
// pessoa1.idade = 17
// pessoa1.apresentar = function () {
//     console.log(`meu chamo ${this.nome}`)
// }
// pessoa1.dataNascimento = function () {
//     const dataAtual = new Date()
//     const idade = this.idade
//     const calculo = dataAtual.getFullYear() - idade
//     console.log(`nasceu no ano de ${calculo}`)
// };
// pessoa1.apresentar()
// pessoa1.dataNascimento()

// FORMA ADEQUADA DE CRIAR OBJETOS USANDO UM MOLDE
// Factory Function
// function createPerson(nome, sobrenome, idade, estado, cidade, rua, casa) {
//     // ...código para tratar os dados
//     for (let value of arguments) {
//         if (!value) {
//             console.log("Ops")
//             return
//         }
//     }

//     return {
//         // ...keys ... propriedades
//         id: Date.now(),
//         nome,
//         sobrenome,
//         idade,
//         endereco: {
//             estado, cidade, rua, casa
//         },

//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`
//         },

//         set nomeCompleto(novoNome) {
//             const array = novoNome.split(" ")
//             this.nome = array.shift()
//             this.sobrenome = array.join(" ")
//         }
//     }
// }

// const pessoa1 = createPerson("L", "H", 17, "bb", "CALI", "MIN", 1798)
// pessoa1.nomeCompleto = "straus lestrade"
// console.log(pessoa1.nomeCompleto)

// Constructor Function -> Forma antiga
function Person(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome

    // posso usar freeze aqui dentro para garantir que todos objetos criados com essa função não possam ser modificados posteriormente
    Object.freeze(this)
}

// a palavra new cria um objeto vazio e atrela a palavra this ao objeto
const p1 = new Person("L", "H")
const p2 = new Person("M", "X")

// posso usar Object.freeze(obj) para impedir qualquer tentativa de modificação de um objeto externamente
// Object.freeze(p2)
p1.nome = "C"
p2.nome = "A"

console.log(p1, p2)