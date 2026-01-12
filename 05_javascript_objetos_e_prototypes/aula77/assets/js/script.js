class Cpf {
    constructor() {
        this.form = document.querySelector("#formulario-validador")
        this.inputCpf = this.form.querySelector("#cpf")
        this.init();
    }

    init() {
        this.inputCpf.focus()
        this.inputCpf.addEventListener("input", () => this.sanitizer())
        this.form.addEventListener('submit', (e) => this.handleForm(e))
    }

    showAlert(type, msg) {
        const source = document.querySelector(".alert")
        if (source) source.remove()

        const target = document.querySelector("#container-input")

        const div = document.createElement("div")
        div.classList.add("alert", `alert-${type}`)
        div.textContent = msg

        target.insertAdjacentElement("afterend", div)

        setTimeout(() => div.remove(), 5000)
    }

    sanitizer() {
        const cpf = this.inputCpf.value
        const newCpf = cpf.replace(/[^0-9]/g, "")
        this.inputCpf.value = newCpf
    }

    handleForm(e) {
        e.preventDefault()

        const cpf = this.inputCpf.value

        if (cpf.length !== 11) {
            this.showAlert("danger", "CPF INVÁLIDO")
            return
        }

        this.handleDigits(cpf)
    }

    handleDigits(value) {
        // const arrayValues = value.split("").map((n) => Number(n));
        const arrayValues = [...value].map(Number)
        if (arrayValues.every((n) => n === arrayValues[0])) {
            return this.showAlert("danger", "CPF INVÁLIDO")
        }

        const d2 = arrayValues.pop()
        const d1 = arrayValues.pop()

        this.checkDigits(d1, d2, arrayValues)
    }

    checkDigits(dv1, dv2, values) {
        const resultado1 = this.extractDigits(values)
        const resultado2 = this.extractDigits(values.concat(resultado1))

        if (dv1 !== resultado1 || dv2 !== resultado2) {
            this.showAlert("danger", "CPF INVÁLIDO")
            return
        }
        this.showAlert("success", "CPF VÁLIDO")
    }

    extractDigits(values) {
        let limit = values.length + 2
        const sum = values.map(n => {
            limit--
            return limit * n
        }).reduce((acc, currentValue) => acc + currentValue, 0)
        const resto = sum % 11
        const resultado = resto < 2 ? 0 : 11 - resto
        return resultado
    }
}

const init = new Cpf()