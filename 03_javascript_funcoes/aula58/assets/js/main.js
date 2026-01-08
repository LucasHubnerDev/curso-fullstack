function Calculator() {
    this.input = document.querySelector("input");
    this.buttons = document.querySelectorAll(".btn");
    this.init();
}

Calculator.prototype.init = function () {
    this.handleButtons();
    this.handleInput();
};

Calculator.prototype.handleButtons = function () {
    this.buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const character = btn.textContent;

            if (character === "=") return this.calculate();
            if (character === "X") return this.removeLastElement();
            if (character === "C") return this.clearElements();

            this.inputValue = this.input.value + character;
        });
    });
};

Calculator.prototype.handleInput = function () {
    this.input.focus();

    this.input.addEventListener("input", () => {
        this.filter(this.input.value);
    });

    this.input.addEventListener("keyup", (e) => {
        if (e.key === "Enter") this.calculate();
    });
};

Object.defineProperty(Calculator.prototype, "inputValue", {
    get() {
        return this.input.value;
    },
    set(value) {
        this.input.value = value;
    },
});

Calculator.prototype.calculate = function () {
    try {
        const result = eval(this.input.value);

        if (Number.isNaN(result)) {
            alert("conta inválida");
            this.clearElements();
            return;
        }

        this.inputValue = result;
    } catch {
        alert("erro no cálculo");
    }
};

Calculator.prototype.filter = function (value) {
    this.inputValue = value
        .replace(/,/g, ".")
        .replace(/[a-zA-Z]/g, "");
};

Calculator.prototype.removeLastElement = function () {
    this.inputValue = this.input.value.slice(0, -1);
};

Calculator.prototype.clearElements = function () {
    this.inputValue = "";
};

new Calculator();
