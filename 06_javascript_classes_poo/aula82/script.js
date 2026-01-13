class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    power() {
        if (this.ligado) return
        this.ligado = true
    }

    powerOff() {
        if (!this.ligado) return
        this.ligado = false
    }
}

const d1=  new DispositivoEletronico("celular")
d1.power()
console.log(d1)

// usando extends para herdar tudo de outra classe (delegar a outra classe)
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor) {
        super(nome);
        this.cor = cor
    }
}
const s1 = new Smartphone("iphone 7", "cromado")
s1.power()
console.log(s1)

class Celular extends DispositivoEletronico {
    constructor(nome, modelo) {
        super(nome)
        this.modelo = modelo
    }

    power() {
        console.log("método alterado somente na classe filha")
    }

    ligar() {
        console.log("ligando...")
    }
}