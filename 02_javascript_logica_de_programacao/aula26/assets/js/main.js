const btnCalcularImc = document.querySelector("#btn-calcular-imc")

const inputImc = document.querySelector("#imc")
const inputResultado = document.querySelector("#resultado")

const inputPeso = document.querySelector("#peso")
const inputAltura = document.querySelector("#altura")

const filter = (input) => {
    input.value = input.value.replace(/,/g, ".").replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1")
}

inputPeso.addEventListener("input", ()  => filter(inputPeso) )
inputAltura.addEventListener("input", ()  => filter(inputAltura) )

const calcImc = () => {
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (peso <= 0 || altura <= 0 || !peso || !altura) {
        alert("Preencha os campos corretamente")
        return
    }

    const imc = (peso / (altura ** 2)).toFixed(2)
    inputImc.value = imc

    calcResultadoImc(Number(imc))
}

const calcResultadoImc = (imc) => {
    let resultado = ""

    if (imc < 18.5) {
        resultado = "Abaixo do peso"
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado = "Peso normal"
    } else if (imc <= 29.9) {
        resultado = "Sobrepeso"
    } else if (imc <= 34.9) {
        resultado = "Obesidade grau I"
    } else if (imc <= 39.9) {
        resultado = "Obesidade grau II"
    } else {
        resultado = "Obesidade grau III"
    }

    inputResultado.value = resultado
}

btnCalcularImc.addEventListener("click", calcImc)
