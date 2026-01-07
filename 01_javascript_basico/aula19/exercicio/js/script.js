const containerPrincipal = document.querySelector("#container-principal")

let id = 0;
const peoples = []
class People {
    constructor(nome, sobrenome, peso, altura) {
        this.id = id++
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.peso = peso;
        this.altura = altura
    }
}

const handleSubmit = (e) => {
    e.preventDefault()
    const nome = document.querySelector("#nome")
    const sobrenome = document.querySelector("#sobrenome")
    const peso = document.querySelector("#peso")
    const altura = document.querySelector("#altura")


    peoples.push(new People(nome.value, sobrenome.value, peso.value, altura.value))
    handlePeoples()
}

const handlePeoples = () => {
    containerPrincipal.innerHTML = ""

    if(peoples.length == 0) {
        containerPrincipal.innerHTML = "<p>sem pessoas cadastradas</p>"
        return
    }

    peoples.map((people) => {
        const p = document.createElement("p")
        p.textContent = `${people.id}: ${people.nome}`
        containerPrincipal.appendChild(p)
    })
}

handlePeoples();