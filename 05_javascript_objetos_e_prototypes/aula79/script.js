// Factory Function + prototype

// Forma inadequada
// Os métodos vão ser criados em cada uma dos objetos instanciados
// function createPerson(name, surname) {
//     return {
//         name,
//         surname,
//         falar() { console.log(`${this.name} está falando`) },
//         comer() { console.log(`${this.name} está comendo`) },
//         beber() { console.log(`${this.name} está bebendo`) }
//     }
// }

// const p1 = createPerson("L", "H")
// const p2 = createPerson("L", "H")
// const p3 = createPerson("L", "H")

// console.log(p1,p2,p3)

// Forma adequada
// agora os métodos pertence exclusivamente ao prototype
// todos as instância podem acessar o mesmo método na cadeia de protótipo

const falar = function() { console.log(`${this.name} está falando`) }
const comer = function() { console.log(`${this.name} está comendo`) }
const beber = function() { console.log(`${this.name} está bebendo`) }

function createPerson(name, surname) {
    // composição
    const personPrototype = {falar,comer,beber}

    return Object.create(personPrototype, {
        name: {
            value: name
        },
        surname: {
            value: surname
        }
    })
}

const p1 = createPerson("L","H")
p1.falar()