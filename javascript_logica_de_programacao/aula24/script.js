// estruturas condicionais
const hora = "12"

if (hora == 12) {
    console.log("hora do almoço")
} else if (hora > 12) {
    console.log("Boa Tarde")
} else console.log("Bom Dia")

const randomNumber = Math.floor(Math.random() * 101)

let msg;
if (randomNumber <= 20) {
    msg = "sorte ruim"
} else if (randomNumber <= 40) {
    msg = "sorte intermediária"
} else if (randomNumber <= 60) {
    msg = "sorte razoável"
} else if (randomNumber <= 80) {
    msg = "sorte boa"
} else if (randomNumber <= 100) {
    msg = "sorte excelente"
} else console.log("eu sei o que você fez")

console.log(msg, randomNumber)