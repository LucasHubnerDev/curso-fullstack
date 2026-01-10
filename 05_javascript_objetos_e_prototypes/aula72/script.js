// defineProperty -> Getters e Setters

function Product(nome, preco, estoque) {
    this.name = nome,
    this.price = preco,

    Object.defineProperty(this, "stock", {
        enumerable: true,
        // writable: true,
        // value: estoque,
        configurable: false,
        get: function() {
            return estoque
        },
        set: function(value) {
            const number = Number(value)
            if(Number.isNaN(number) || number < 0) return
            estoque = number
        }
    })
}

const p1 = new Product("shampoo", 54.80, 100)
console.log(Object.keys(p1))