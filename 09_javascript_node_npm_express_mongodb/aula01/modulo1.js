// const nome = "L"
// const sobrenome = "H"

// const falaNome = () => {
//     console.log(nome, sobrenome)
// }

// no node.js cada arquivo é um módulo
// NODE.js é um ambiente de execução responsável por tornar possível rodar javascript fora do navegador, principalmente no lado do servidor
// tudo que eu querer tornar acessível para outros arquivos devo exportar usando module.exports
// por padrão, nada é visível fora do arquivo

// aqui estou criando propriedades em module.exports
// module.exports.nome = nome
// module.exports.sobrenome = sobrenome
// module.exports.falaNome = falaNome;

// uma forma mais  otimizada de exportar
// exports.NOME = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;

// console.log(module.exports)

class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.name = nome;
        this.surname = sobrenome,
            this.age = idade
    }

    falaNome() {
        return `${this.name} ${this.surname}`
    }
}

exports.Pessoa = Pessoa

// exports.nome = "L"
// exports.sobrenome = nome

// não consigo passar um objeto para exports
// só funciona em module.exports
// module.exports = { nome, sobrenome, idade }
 