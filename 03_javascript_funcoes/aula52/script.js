// escopo léxico
const nome = "L"

function falaNome() {
    console.log(nome)
}

function useFalaNome() {
    const nome = "H"
    falaNome()
}
useFalaNome()