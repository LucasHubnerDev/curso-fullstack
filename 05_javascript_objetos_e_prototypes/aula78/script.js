// Polimorfismo 

// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo
}

Conta.prototype.sacar = function (valorDeSaque) {
    if(valorDeSaque > this.saldo) return
    this.saldo -= valorDeSaque
    console.log("saque realizado com sucesso, seu novo saldo:" + this.saldo)
}

Conta.prototype.depositar = function (valorDeDeposito) {
    this.saldo += valorDeDeposito
    console.log("depósito realizado com sucesso, seu novo saldo:" + this.saldo)
}

Conta.prototype.verSaldo = function() {
    console.log(`agencia:${this.agencia}\nconta:${this.conta}\nsaldo:${this.saldo}`)
}

function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

CC.prototype = Object.create(Conta.prototype)
CC.prototype.constructor = CC

// override
CC.prototype.sacar = function(valorDeSaque) {
    if(valorDeSaque > (this.saldo + this.limite)) return
    this.saldo -= valorDeSaque
    console.log("saque realizado com sucesso, seu novo saldo:" + this.saldo)
}

function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}

CP.prototype = Object.create(Conta.prototype)
CP.prototype.constructor = CP

const cc = new CC(190, 129034902, 2500, 500)
cc.sacar(1000)
cc.depositar(500)

// O polimorfismo acontece porque CC e CP são tipos diferentes de Conta, mas respondem ao método sacar() de formas diferentes.
// override se trata de reescrever um método