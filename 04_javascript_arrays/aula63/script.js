// splice adiciona, remove e substitui
// o primeiro argumento define o indice
// o segundo o número de elementos apagados a partir daquele índice
// e o resto são os elementos a ser adicionados a partir daquele índice definido
//              -4   -3   -2   -1
//               0    1    2    3
const letras = ["L", "K", "E", "G"]
letras.splice(0, 1, "LH")
letras.splice(letras.length, 0, "A", "B", "C")
letras.splice(1, 1, "KEYNNER")
letras.splice(-1, 1, "elemento removido")
console.log(letras)
console.log(letras.sort((a,b) => a.localeCompare(b)))

