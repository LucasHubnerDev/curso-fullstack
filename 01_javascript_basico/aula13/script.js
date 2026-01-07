//               012345678 -> índices
let umaString = "Um texto"; // forma de escapar caracteres
// console.log(umaString);

// posso especificar o índice a ser buscado
console.log(umaString[5]) 

// se eu tentar acessar um indice fora do index, vai retornar undefined.
console.log(umaString[10])
console.log(umaString[-2])

// posso usar charAt() para buscar o índice, mas ao não econtrar nada vai retornar um valor vazio ""
// retornar o caracter do index especificado
console.log(umaString.charAt(5));

// formas de concatenar
const nome = "lucas";
const sobrenome = "hubner";
let nomeCompleto = ""

// método concat
// nomeCompleto = nomeCompleto.concat(nome, " ", sobrenome)

// concatenação com +
// nomeCompleto = nome + " " + sobrenome

// concatenação com template strings
nomeCompleto = `${nome} ${sobrenome}`

console.log(nomeCompleto)

// método para descobrir o index de um caractere ou onde foi encontrado a primeira ocorrência
// retorna a posição da primeira ocorrência de uma substring especificada
console.log(nomeCompleto.indexOf("hubner"))

// método lastIndexOf()
// retorna a posição da última ocorrência de uma substring
console.log(nomeCompleto.lastIndexOf("u"))

// método match();
/// expressão regular (regexp) -> .match(/[a-z]/g) 
// retorna um array com informações da primeira ocorrência sem a flag "g"
// com a flag g retorna todas as ocorrências encontradas.
// retorna o index da primeira ocorrência
// retorna o input que se refere ao texto original
// retorna o texto encontrado
console.log(nomeCompleto.match(/[a-z]/g));

// método search
// usado para descobrir o índice de uma substring
// aceita expressões regulares
console.log(nomeCompleto.search(/b/))

// método replace
// me permite substituir uma sequencia de caracteres encontrada por outra
// aceita expressões regulares
console.log(nomeCompleto.replace("hubner", "nascimento"));

let frase = "o rato roeu a ropa do rei de roma";
// frase = frase.replace(/r/, "g");
console.log(frase);

// propriedade length
// retorna número de elementos
console.log(frase.length);

// método slice
// usado para fatiar uma string
const palavra = "rato"
const indexInicial = frase.indexOf(palavra)

if(indexInicial !== -1) {
    console.log(
        frase.slice(indexInicial, indexInicial + palavra.length)
    )
}

// pode receber valor de inicio negativo
console.log(frase.slice(-3))
console.log(frase.slice(frase.length - 3))

// método substring()
// não aceita índices negativos
//
console.log(frase.substring())

// método split
// me retorna um array com base em um separador em comun entre elementos como o espaço
// o primeiro parâmetro recebe o argumento que define o separador em comum, e o segundo o limite de vezez que vai ocorrer a separação.
// todas as substrings vão ser jogadas dentro de um array
console.log(frase.split(" "))
console.log(frase.split(" ", 4))

console.log(frase.toUpperCase())