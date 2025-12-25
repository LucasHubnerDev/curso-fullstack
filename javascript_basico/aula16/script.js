// Arrays

// array -> lista de elementos
// cada elemento tem seu próprio index
// posso colocar qualquer tipo de elemento dentro de um array
// para boas práticas, coloque elementos padronizados
// const numeros = [10, 9, 4, 5, 7]
// const palavras = ["banana", 'palavra', 'garotas', `armas`]
// const tudo = [10, '10', 'número', 50, true, null]
//             0         1          2          3        4
const alunos = ["Lucas", 'Keynner', "Larissa", "emily", "Yasmin"]
// console.log(alunos)
// console.log(alunos[0]) // os elementos do array tem seu próprio index

// em um array eu posso alterar um elemento mesmo que ele esteja em uma variável constante
// alunos[1] = "Hubner"
// console.log(alunos[1])

// posso criar um elemento, atribuindo um valor a um index que não existe
// alunos[5] = "Kévlin"
// console.log(alunos)

// proprieda length em arrays, para descobrir a quantidade de elementos
// console.log(alunos.length)

// posso usar o valor retornado pelo .length para acessa o index após o último elemento
// alunos[alunos.length] = "Rayssa"

// forma certa de adicionar um elemento ao final do array
alunos.push("Rayssa")
alunos.push("Kévlin")

// eu posso adicionar no inicio do array também, só que não é recomendado, pois desloca todos os outros elementos para o próximo index.
alunos.unshift("Alessandra")
console.log(alunos)

// usado para remover o último elemento de um array.
console.log(alunos.pop())

// usado para remover o primeiro elemento de um array.
console.log(alunos.shift())

// usado para deletar o elemento de um índice, mas ficara um item vazio no lugar.
delete alunos[1]
console.log(alunos) // empty item -> item vazio

// ao tentar acessar um indice que não existe, vai ser retornado undefined
// não dá erro, apenas se eu tentar acessar algo dentro do índice inexistente
console.log(alunos[51])

// eu também posso fatiar arrays
// eu posso usar números negativos no próximo atgumento, para eliminar elementos da direita para a esquerda
console.log(alunos.slice(0, -3))

// array no JavaScript é considerado como um objeto
// array é um objeto indexado
console.log(typeof alunos)

// para confirmar se um array realmente é um array
console.log(alunos instanceof Array)