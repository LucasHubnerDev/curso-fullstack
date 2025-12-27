/** OPERADORES LÓGICOS
 * && -> AND -> todas as expressões precisam ser verdadeiras
 * || -> OR -> Uma das expressões tem que ser verdadeiras
 * ! -> usado para inverter o valor de uma expressão (true/false)
 */

console.log(7 > 8 && 8 > 7)
console.log(7 > 8 || 8 > 7)
console.log(7 != 8 && 8 > 7)

const user = "Lucas"
const password = "123"
const authentication = user === "Lucas" && password === "123"

if(authentication){
    console.log("usuário logado")
} else {
    console.log("preencha os campos corretamente")
}

// duas negações retorna para o valor original
console.log(!true, !!true)