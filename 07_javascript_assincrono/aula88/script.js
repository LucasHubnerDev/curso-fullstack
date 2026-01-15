// Assync/Await

const promise = (msg, tempo) => {
    return new Promise((resolve, reject) => {
        if (typeof msg !== "string") return reject("BAD VALUE")
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

const executa = async () => {
    // await pausa o código até que a resposta seja retornada
    // posso usar trycatch para tratar o erro da promise
    try {
        const f1 = await promise("hello friend", 1000)
        console.log(f1)
        const f2 = await promise("i'm await long time for it", 500)
        console.log(f2)
        const f3 = await promise("...", 1000)
        console.log(f3)
    } catch (error) {
        console.log("sorry friend: ", error)
    }
}
console.log("apenas no seu próprio bloco")
executa()

// uma promise tem três estados
/** 
 * pending -> pendente
 * fullfilled -> resolvida
 * rejected -> rejeitada
*/