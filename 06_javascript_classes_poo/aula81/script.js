// Getter, Setter e Symbol

// criando uma variável privada
const _velocidade = Symbol('velocidade')

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0
    }

    get velocidade() {
        return this[_velocidade]
    }

    set velocidade(newValue) {
        if (newValue >= 100 || typeof newValue !== 'number' || newValue <= 0) return
        this[_velocidade] = newValue
    }

    acelerar() {
        if (this[_velocidade] >= 100) return
        this[_velocidade]++
    }

    desacelerar() {
        if (this[_velocidade] <= 0) return
        this[_velocidade]--
    }
}

// const c1 = new Carro("bmw")

// for (let i = 0; i <= 200; i++) {
//     c1.acelerar()
// }

// c1.velocidade = 99
// console.log(c1)

class Person {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }

    set nomeCompleto(novoNome) {
        const array = novoNome.split(" ")
        this.nome = array.shift()
        this.sobrenome = array.join(" ")
    }
}

const p1 = new Person("mauser", "lestrade toscano")
console.log(p1);
p1.nomeCompleto = "arthur morgan"
console.log(p1)