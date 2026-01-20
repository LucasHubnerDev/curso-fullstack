export default class GeradorDeCpf {
    constructor() {
        this.btn = document.querySelector("#btn-generator")
        this.init()
    }
    
    init() {
        this.btn.addEventListener("click", () => {
            const cpf = this.generatedRandomDigits(9, 9)
            this.setResult(cpf)
        })
    }

    generatedRandomDigits(quantidade, maxValue) {
        const numerosAleatorios = []

        for (let i = 0; i < quantidade; i++) {
            const randomNumber = Math.floor(Math.random() * (maxValue + 1))
            numerosAleatorios.push(randomNumber)
        }

        return this.generatedValidatorDigits(numerosAleatorios)
    }

    extractDigits(values) {
        let limit = values.length + 1

        const sum = values.reduce((acc, n) => {
            acc += limit * n
            limit--
            return acc
        }, 0)

        const resto = sum % 11
        return resto < 2 ? 0 : 11 - resto
    }

    generatedValidatorDigits(values) {
        const digito1 = this.extractDigits(values)
        const digito2 = this.extractDigits([...values, digito1])

        return this.formatCpf([...values, digito1, digito2])
    }

    formatCpf(cpfArray) {
        const cpf = cpfArray.join("")
        return cpf.replace(
            /(\d{3})(\d{3})(\d{3})(\d{2})/,
            "$1.$2.$3-$4"
        )
    }

    setResult(cpf) {
        const p = document.querySelector('#cpf-generated')
        p.textContent = cpf
    }
}