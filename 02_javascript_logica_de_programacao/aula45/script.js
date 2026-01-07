// try {
//     // executada quando não tem erros
//     console.log("open file");
//     console.log("modify file");
//     console.log("close file");

//     // posso usar vários trycatch para deixaro o código mais legível
//     try {
//         console.log("salvando modificações")
//     } catch (error) {
//         console.log("erro na operação")
//     } finally {
//         console.log("i'm finally")
//     }

// } catch (error) {
//     // executada quando há erros
//     console.log("Tratando o erro")
// } finally {
//     // executada independente do resultado
//     console.log("finally: eu sempre sou executado")
// }

function returnHour(data) {

    // usando instance of para descobrir se a variável pertence ao objeto construtor
    if (data && !(data instanceof Date)) {
        throw new TypeError("aguardando uma instância de Date")
    }

    if (!data) {
        data = new Date()
    }

    return data.toLocaleTimeString("pt-BR", {
        hour12: false
    })
}

try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = returnHour()
    console.log(hora)
} catch (error) {
    console.log("sem relógio no momento")
} finally {
    console.log("limpando processos")
}