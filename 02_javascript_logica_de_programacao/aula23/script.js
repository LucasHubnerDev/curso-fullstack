// Short-Circuit

/** FALSY -> valores que representam false
 * false
 * 0
 * '' / "" / ``
 * null / undefined
 * NaN
 */

console.log("nome" && null && "nome")
console.log("nome" && undefined && "nome")
console.log("nome" && "" && "nome")
console.log("nome" && NaN && "nome")
console.log("nome" && 0 && "nome")

const saudacao = (msg) => {
    if(!msg) {
        console.log("seja bem vindo visitante")
        return;
    }

    console.log(msg)
}

// saudacao()
saudacao("ola")

console.log(false, !false)
console.log(undefined, !undefined, !!undefined)
console.log(null, !null, !!null)
console.log(NaN, !NaN, !!NaN)
console.log("", !"", !!"")
