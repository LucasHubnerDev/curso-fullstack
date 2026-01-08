function createCalculator() {
    const input = document.querySelector("input");
    const buttons = document.querySelectorAll(".btn");

    const init = () => {
        handleButtons();
        handleInput();
    };

    const handleButtons = () => {
        buttons.forEach((btn) => {
            btn.addEventListener("click", () => {
                const character = btn.textContent;

                if (character === "=") return calculate();
                if (character === "X") return removeLastElement();
                if (character === "C") return clearElements();

                setInputValue(getInputValue() + character);
            });
        });
    };

    const handleInput = () => {
        input.focus();

        input.addEventListener("input", () => {
            filter(input.value);
        });

        input.addEventListener("keyup", (e) => {
            if (e.key === "Enter") calculate();
        });
    };

    const getInputValue = () => input.value;

    const setInputValue = (value) => {
        input.value = value;
    };

    const calculate = () => {
        try {
            const result = eval(getInputValue());

            if (Number.isNaN(result)) {
                alert("conta inválida");
                clearElements();
                return;
            }

            setInputValue(result);
        } catch {
            alert("erro no cálculo");
        }
    };

    const filter = (value) => {
        setInputValue(
            value
                .replace(/,/g, ".")
                .replace(/[a-zA-Z]/g, "")
        );
    };

    const removeLastElement = () => {
        setInputValue(getInputValue().slice(0, -1));
    };

    const clearElements = () => {
        setInputValue("");
    };

    // inicialização
    init();

    // API pública (opcional)
    return {
        calculate,
        clearElements,
    };
}

createCalculator();
