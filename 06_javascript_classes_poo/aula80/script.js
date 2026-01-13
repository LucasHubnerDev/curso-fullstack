// class
class Person {
    // método construtor
    // retorna automaticamente o objeto
    constructor(name, surname, age) {
        this.nome = name;
        this.sobrenome = surname;
        this.idade = age;
    }

    // métodos
    // métodos adicionados automaticamente ao prototype
    getData() {
        console.log(`nome:${this.nome}\nsobrenome:${this.sobrenome}\nidade:${this.idade}`)
    }
}

const p1 = new Person("L", "H", 17)
p1.getData()