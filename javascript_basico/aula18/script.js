// mesmo utilizando const eu posso modificar diretamente os elementos dentro do array, pois não interefe em nada na variável
// const array = [1,2,3]

// exemplo de objeto
// objeto de trata de uma estruturação de dados mais complexa, usada para guardar informações de cadastro etc...
const pessoa1 = {
    nome: "lucas",
    sobrenome: "hubner",
    idade: 17,
    hobbies: ["jogar", "lutar", "treinar", "ler"]
}

// acessando os dados de um objeto
// objeto.atributo

// console.log(pessoa1.nome, pessoa1.sobrenome)

// posso criar uma função que cria objetos
// chamada de factory function
// posso guardar qualquer coisa dentro de um objeto
function newPessoa (nome, sobrenome, idade, genero) {
    const people = {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        genero: genero,

        // método
        // posso criar vários métodos
        // usando this para referenciar o próprio objeto do contexto atual
        fala() {
            console.log(`meu nome é ${this.nome}`)
        }
    }

    return people
}

// const pessoa2 = newPessoa("keynner", "davi", 18, "M")

// console.log(pessoa2.nome)
// pessoa2.fala()

// outra forma de criar objetos usando classes
// classes são moldes para criar objetos
class People {
    constructor(name, surname){
        this.nome = name;
        this.sobrenome = surname;
    }

    get info() {
        console.log(this.nome, this.sobrenome)
    }

    fala() {
        console.log(`meu nome é ${this.nome}`)
    }
}

const pessoa3 = new People("Emanuela", "Pereira")
pessoa3.fala()
pessoa3.info