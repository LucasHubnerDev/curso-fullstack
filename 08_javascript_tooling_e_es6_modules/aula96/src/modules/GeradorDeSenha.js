class GeradorDeSenha {
    constructor() {
        this.btnGerarSenha = document.querySelector("#btn-gerar-senha")

        this.inputDeQuantidadeDeCaracteres = document.querySelector("#input-de-quantidade-de-caracteres")
        this.inputResultadoSenha = document.querySelector("#resultado-senha")

        this.cb = {
            checkboxDeNumeros: document.querySelector("#checkbox-de-numeros"),
            checkboxDeLetrasMaiusculas: document.querySelector("#checkbox-de-letras-maiusculas"),
            checkboxDeLetrasMinusculas: document.querySelector("#checkbox-de-letras-minusculas"),
            checkboxDeSimbolos: document.querySelector("#checkbox-de-simbolos")
        }

        this.init()
    }

    init() {
        this.inputDeQuantidadeDeCaracteres.addEventListener("input", () => {
            let newValue = this.inputDeQuantidadeDeCaracteres.value
            newValue = newValue.replace(/[^0-9]/g, "")
            this.inputDeQuantidadeDeCaracteres.value = newValue
        })

        this.btnGerarSenha.addEventListener("click", () => {
            if (!this.validadorDeFormulario()) return
            const senha = this.gerarSenha()
            this.inputResultadoSenha.value = senha
        })
    }

    validadorDeFormulario() {
        const limite = Number(this.inputDeQuantidadeDeCaracteres.value)

        if (!limite || limite <= 0) {
            this.gerarErro("Quantidade inválida")
            return false
        }

        let acc = 0
        for (let checkbox of Object.values(this.cb)) {
            if (checkbox.checked) acc++
        }

        if (acc === 0) {
            this.gerarErro("Selecione pelo menos um tipo de caractere")
            return false
        }

        return true
    }


    randomizar(max, min = 0) {
        return Math.floor(Math.random() * (max - min)) + min
    }


    gerarNumero() {
        const randomNumber = this.randomizar(57, 48)
        const character = String.fromCharCode(randomNumber)
        return character
    }

    gerarLetraMaiuscula() {
        const randomNumber = this.randomizar(90, 65)
        const character = String.fromCharCode(randomNumber)
        return character
    }

    gerarLetraMinuscula() {
        const randomNumber = this.randomizar(122, 97)
        const character = String.fromCharCode(randomNumber)
        return character
    }

    gerarSimbolo() {
        const simbolos = "!@#$%&*?/-+"
        const randomNumber = this.randomizar(simbolos.length - 1)
        return simbolos[randomNumber]
    }

    gerarSenha() {
        let senha = "";
        const metodos = [];

        const mapa = {
            checkboxDeNumeros: this.gerarNumero,
            checkboxDeLetrasMaiusculas: this.gerarLetraMaiuscula,
            checkboxDeLetrasMinusculas: this.gerarLetraMinuscula,
            checkboxDeSimbolos: this.gerarSimbolo
        }

        for (const [key, metodo] of Object.entries(mapa)) {
            if (this.cb[key].checked) {
                metodos.push(metodo.bind(this))
            }
        }


        const limite = Number(this.inputDeQuantidadeDeCaracteres.value)

        for (let i = 0; i < limite; i++) {
            const randomIndex = this.randomizar(metodos.length, 0)
            senha += metodos[randomIndex]()
        }

        return senha
    }

    gerarErro(msg) {
        const div = document.querySelector("#mensagem-erro")
        if(div.innerText) return
        div.innerText = msg
        setTimeout(() => {
            div.innerText = ""
        }, 3000)
    }
}

export default new GeradorDeSenha()