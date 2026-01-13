// Métodos estáticos que podem ser acessados sem instânciar a classe
// métodos que não dependem de nenhuma propriedade do constructor

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0
    }

    // métodos de instância
    // métodos que dependem da instância
    aumentarVolume() {
        if (this.volume >= 100) return
        this.volume += 2
    }

    diminuirVolume() {
        if (this.volume <= 0) return
        this.volume -= 2
    }

    // métodos estático
    // métodos exclusivo da classe
    static atualizarFirmware() {
        console.log("atualizando...")
    }

    static repararSistema() {
        console.log("restaurando configurações de fábrica...")
    }
}

// instânciação
const cr1 = new ControleRemoto("sansung")

for (let i = 1; i <= 10; i++) {
    cr1.aumentarVolume()
}
console.log(cr1)

// método estático só pode ser acessado pela classe
// métodos estático não tem acesso aos dados da instância
ControleRemoto.atualizarFirmware()