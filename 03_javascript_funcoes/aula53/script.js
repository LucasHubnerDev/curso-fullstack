// Closures
// closure se trata da possibilidade da função acessar o seu escopo léxico
function returnFunction() {
    const nome = "L"

    return function() {
        return nome;
    }
}

const funcao = returnFunction();
console.log(funcao())
console.dir(funcao())