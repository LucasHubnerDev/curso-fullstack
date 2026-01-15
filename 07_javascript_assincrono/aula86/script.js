// Promises
// usada para processos que acontecem de forma assíncrona
// como aguardar uma consulta de api

const rand = (min, max) => {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function conectDB(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== "string") {
            // reject para rejeitar a promise
            reject("BAD VALUE")
        }
        setTimeout(() => {
            // resolve para resolver a promise
            resolve(msg);
        }, tempo)
    })

}

// preciso fazer com que esses processos assíncronos sigam uma ordem
// posso resolver esse problema com uma promise
// .then para obter a resposta das promise resolvida
// .catch para promise rejeitada
conectDB("buscando rota", rand(1, 3))
    .then((resposta) => {
        console.log(resposta)
        // encadeando outra função na promise
        // retornando uma promise
        return conectDB("sincronizando", rand(1, 3))
    })
    .then((resposta) => {
        console.log(resposta)
        return conectDB(123, rand(1, 3))
    })
    .then((resposta) => {
        // posso mandar para outro then
        return resposta
    })
    .then((resposta) => {
        console.log(resposta)
    })
    .catch(e => {
        // caso alguma promise seja rejeitada, cai em catch o erro
        console.log("ERRO:", e)
    });

console.log("inicializando busca")