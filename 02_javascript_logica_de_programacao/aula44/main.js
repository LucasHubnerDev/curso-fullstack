// Tratamento de erros
// erros internos devem ser tratados, não exibidos diretamente ao usuário

function soma(...numbers) {

    const numbersConverted = numbers.map((number) => {
        const converted = Number(number)

        // Number("as") → NaN
        if (Number.isNaN(converted)) {
            // função construtora para lançar erros no JavaScript
            // tem classes de erro
            throw new Error("Dados inválidos")
        }

        return converted
    })

    const initialValue = 0
    const sumNumbersConverted = numbersConverted.reduce(
        (acc, numero) => acc + numero,
        initialValue
    )

    return sumNumbersConverted
}

try {
    const teste = soma(5, 10, 7)
    console.log(teste)

    const teste2 = soma(5, 7, "abc")
    console.log(teste2)
} catch (error) {
    console.log("Não foi possível realizar a operação 😕")
    // console.log(error)
}
