// Atribuição via desestruturação de objetos
const pessoa = {
    nome: "Lucas",
    genero: "Masculino",
    idade: 17,
    endereco: {
        estado: "RR",
        cidade: "Tocantins"
    },
    conhecimentos: ["TI", "HACKING", "HARDWARE", "COMPUTAÇÂO GRÁFICA", "ENGENHARIA SOCIAL"]
}

// para desestruturar objetos eu coloca as variáveos dentro de um objeto
// eu posso desestruturar várias coisas de uma só vez
// eu posso atribuir um novo nome na desestruturação
const nomePessoa = pessoa.nome

// atribuição via desestruturação
const { nome: name, genero: gender, idade: age, endereco: { estado, cidade }, conhecimentos: [um, dois, tres, ...resto] } = pessoa
console.log(name, gender, age)
console.log(estado, cidade)
console.log(um, dois, tres, resto)

// desestruturação é muito usado em React