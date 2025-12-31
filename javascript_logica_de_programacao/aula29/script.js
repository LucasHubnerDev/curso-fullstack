// Switch/Case
// Usado para situações de  múltiplas escolhas

const horas = new Date().getHours()
const msg = ["bom dia", "boa tarde", "boa noite"]

// swtich com estruturas de condição
// switch (true) {
//     case horas >= 0 && horas <= 12: {
//         console.log(msg[0])
//         break;
//     }
//     case horas > 12 && horas <= 18: {
//         console.log(msg[1])
//         break;
//     }
//     case horas > 18 && horas <= 23: {
//         console.log(msg[2])
//         break;
//     }
// }

// formas mais adequada
// let option;

// if (horas >= 0 && horas <= 12) {
//     option = 0
// } else if (horas > 12 && horas <= 18) {
//     option = 1
// } else if (horas > 18 && horas <= 23) {
//     option = 2
// }

// o switch compara diretamente o parâmetro com o valor no case, option === 0
// switch é usado com valores fixos
// switch (option) {
//     case 0:
//         console.log(msg[0])
//         break;
//     case 1:
//         console.log(msg[1])
//         break;
//     case 2:
//         console.log(msg[2])
//         break;
// }

const data = new Date() // domingo === 0, sábado === 6
const diaSemana = data.getDay()
let texto;

switch (diaSemana) {
    case 0:
        texto = 'domingo'
        break;
    case 1:
        texto = 'segunda-feira'
        break;
    case 2:
        texto = 'terça-feira'
        break;
    case 3:
        texto = 'quarta-feira'
        break;
    case 4:
        texto = 'quinta-feira'
        break;
    case 5:
        texto = 'sexta-feira'
        break;
    case 6:
        texto = 'sábado'
        break;
    default:
        texto = "o último dia na terra"
        break;
}

console.log(`hoje é ${texto}`);