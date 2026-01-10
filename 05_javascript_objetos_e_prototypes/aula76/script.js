// Herança
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = Number(preco);
}

Produto.prototype.aumento = function (percentual) {
    if (this.preco === 0 || percentual === 100 || typeof percentual !== "number" || Number.isNaN(this.preco)) {
        console.log("não foi possível realizar o aumento")
    }
    this.preco = this.preco + this.preco / 100 * percentual
}

Produto.prototype.desconto = function (percentual) {
    if (this.preco === 0 || percentual === 100 || typeof percentual !== "number" || Number.isNaN(this.preco)) {
        console.log("não foi possível realizar o aumento")
    }
    this.preco = this.preco - this.preco / 100 * percentual
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
}

// copiando Protótipo de outro constructor, assim as modificações no proto de Camiseta não modifica o Produto
Camiseta.prototype = Object.create(Produto.prototype)

const camiseta = new Camiseta("camisa", 200)
console.log(camiseta)
Camiseta.prototype.constructor = Camiseta
console.log(camiseta)
