// Manipulando prototypes
// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // _proto_: Object.prototype
}

const objB = {
    chaveB: "B"
    // _proto_: objA
}

const objC = {
    chaveC: "C",
    // _proto_: objB
}
// eu posso mudar o proto de um objeto
// objB --> objA --> Object.prototype
// Object.setPrototypeOf(target, source)
// primeiro argumento é o objeto onde o proto será modificado
// o segundo argumento é o novo prototype a ser inserido no lugar
// Object.setPrototypeOf(objB, objA)
// Object.setPrototypeOf(objC, objB)

// console.dir(objB)
// console.log(objC.chaveA)

function Product(name, price) {
    this.name = name;
    this.price = price
}
// colocar o método diretamente em prototype melhora a performance do código, pois todas as instâncias podem reaproveitar esse método sem ter que criala em seu próprio escopo
Product.prototype.infoProduto = function () {
    return `${this.name} está a venda, por apenas ${this.price}R$`
}

Product.prototype.desconto = function (porcentagem) {
    this.price = this.price - (this.price / 100 * porcentagem)
}

const p1 = new Product("xicara", 50)
p1.desconto(50)
console.log(p1.infoProduto())

// criando um objeto de forma que ele tenha o mesmo proto da Function Constructor Product
const p2 = Object.create(Product.prototype, {
    id: {
        writable: false,
        configurable: false, 
        enumerable: true,
        value: Date.now()
    }
})

p2.name = "mulher"
p2.price = 100
p2.desconto(10)
console.log(p2.infoProduto())
console.log(p2.id)
