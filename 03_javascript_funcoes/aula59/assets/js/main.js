class Calculator {
    constructor() {
        this.input = document.querySelector("input");
        this.buttons = document.querySelectorAll(".btn");
        this.init()
    }

    init() {
        this.handleButtons()
        this.handleInput()
    }

    handleButtons() {
        this.buttons.forEach((btn) => {
            btn.addEventListener("click", () => {
                const character = btn.textContent

                if (character === "=") return this.calculate()
                if (character === "X") return this.removeLastElement()
                if (character === "C") return this.clearElements()

                this.inputValue = this.input.value + character
            })
        })
    }

    handleInput() {
        this.input.focus()

        this.input.addEventListener("input", () => {
            this.filter(this.input.value)
        })

        this.input.addEventListener("keyup", (e) => {
            if (e.key === "Enter") this.calculate()
        })
    }

    get inputValue() {
        return this.input.value
    }

    set inputValue(value) {
        this.input.value = value
    }

    calculate() {
        try {
            const result = eval(this.input.value)

            if (Number.isNaN(result)) {
                alert("conta inválida")
                this.clearElements()
                return
            }

            this.inputValue = result
        } catch {
            alert("erro no cálculo")
        }
    }

    filter(value) {
        this.inputValue = value
            .replace(/,/g, ".")
            .replace(/[a-zA-Z]/g, "")
    }

    removeLastElement() {
        this.inputValue = this.input.value.slice(0, -1)
    }

    clearElements() {
        this.inputValue = ""
    }
}

new Calculator()
