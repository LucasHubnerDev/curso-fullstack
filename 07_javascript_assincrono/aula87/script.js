const rand = (max, min) => Math.floor(Math.random() + (max - min) + min)

const promessa = (msg, tempo) => {
    return new Promise((resolve, reject) => {
        if (typeof msg !== "string") return reject("conexão encerrada")
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

// promessa("hello friend", rand(1000, 3000)).then((resposta) => {
//     console.log(resposta)
//     return promessa("i am await long time for it", rand(1000, 3000))
// }).then((resposta) => {
//     console.log(resposta)
//     return promessa(0, rand(1000, 3000))
// }).catch((resposta) => {
//     console.log(resposta)
// })

// Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
    promessa("primeira promise", rand(1000, 3000)),
    promessa("segunda promise", rand(1000, 3000)),
    promessa("terceira promise", rand(1000, 3000))
];

// Promise.all
// usado para resolver todas as promises e retornar somente um valor
// retorna um array com todas as promises resolvidas

// Promise.all(promises)
//     .then(resposta => {
//         console.log(resposta)
//     })
//     .catch(erro => {
//         console.log(erro)
//     });

// Promise.race usado para retornar a primeira promise resolvida
// Promise.race(promises)
//     .then(resposta => {
//         console.log(resposta)
//     })
//     .catch(erro => {
//         console.log(erro)
//     })

// Promise.resolve

const baixarPagina = () => {
    const inCache = true

    if (inCache) return Promise.resolve("página em cache")
    else return promessa("página baixada", rand(1000, 3000))
}

baixarPagina()
.then(data => {
    console.log(data)
})
.catch(err => {
    console.log(err)
})