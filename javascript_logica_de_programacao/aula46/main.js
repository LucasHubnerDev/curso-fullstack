function getHour() {
    let data = new Date();

    return data.toLocaleTimeString("pt-BR", {
        hour12: false
    })
}


// setInterval
// uma função que executa on trecho de código no timeout definido
// tem 3 parâmetros: timeHandler(o que deve ser executado), timeout(intervalo em ms), ...args
const timer = setInterval(() => {
    console.log(getHour())
}, 1000)

// setTimeout
// executa apenas uma vez
// usado em limpeza de processos
setTimeout(() => {
    // função usada para limpar o timer
    clearInterval(timer)
}, 10000)