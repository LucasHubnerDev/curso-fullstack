// Construtora -> molde (classe)
// ao tentar acessar um membro de um objeto o JS vai procurar primeiramente no próprio objeto e depois vai descer para a cadeia de protótipos
function Person(name, surname) {
    this.nome = name;
    this.sobrenome = surname;
    // this.nomeCompleto = function () {
    //     return this.nome
    // }
}
Person.prototype.nomeCompleto = function () { return `${this.nome} ${this.sobrenome}` };

// a ação de gerar novos objetos se chama instanciação
// instância
const pessoa1 = new Person("keynner", "davi")
const pessoa2 = new Person("Danilo", "Pereira")

// método dir usado para mostrar uma lista de propriedades relacionada a um objeto JS especificado
// console.dir(pessoa1)
// console.dir(pessoa2)
console.log(pessoa1.nomeCompleto())

// Person.prototype === pessoa1._proto_

// pessoa1.prototype --> Person.prototype --> Object.prototype