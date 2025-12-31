function data() {
    const inputData = document.querySelector("#input-data")
    const data = new Date()
    const options = {
        dateStyle: 'full',
        timeStyle: 'short'
    }

    // const formatarEmPtBR = (data) => {
    //     const diaDaSemana = data.getDay()
    //     const diaDaSemanaPtBR = extrairDiaNaSemanaPtBR(diaDaSemana)
    //     const dia = zeroLeft(data.getDate())
    //     const mes = data.getMonth()
    //     const mesPtBR = extrairMesPtBR(mes)
    //     console.log(mes)
    //     const ano = data.getFullYear()
    //     const horas = zeroLeft(data.getHours())
    //     const minutos = zeroLeft(data.getMinutes())

    //     function extrairDiaNaSemanaPtBR(diaDaSemana) {
    //         let diaNaSemanaTexto;

    //         switch (diaDaSemana) {
    //             case 0:
    //                 diaNaSemanaTexto = 'domingo'
    //                 break;
    //             case 1:
    //                 diaNaSemanaTexto = 'segunda-feira'
    //                 break;
    //             case 2:
    //                 diaNaSemanaTexto = 'terça-feira'
    //                 break;
    //             case 3:
    //                 diaNaSemanaTexto = 'quarta-feira'
    //                 break;
    //             case 4:
    //                 diaNaSemanaTexto = 'quinta-feira'
    //                 break;
    //             case 5:
    //                 diaNaSemanaTexto = 'sexta-feira'
    //                 break;
    //             case 6:
    //                 diaNaSemanaTexto = 'sábado'
    //                 break;
    //             default:
    //                 diaNaSemanaTexto = "o último dia na terra"
    //                 break;
    //         }

    //         return diaNaSemanaTexto;
    //     }

    //     function extrairMesPtBR(mes) {
    //         let mesPtBR;

    //         switch (mes) {
    //             case 0:
    //                 mesPtBR = "janeiro"
    //                 break
    //             case 1:
    //                 mesPtBR = "fevereiro"
    //                 break
    //             case 2:
    //                 mesPtBR = "março"
    //                 break
    //             case 3:
    //                 mesPtBR = "abril"
    //                 break
    //             case 4:
    //                 mesPtBR = "maio"
    //                 break
    //             case 5:
    //                 mesPtBR = "junho"
    //                 break
    //             case 6:
    //                 mesPtBR = "julho"
    //                 break
    //             case 7:
    //                 mesPtBR = "agosto"
    //                 break
    //             case 8:
    //                 mesPtBR = "setembro"
    //                 break
    //             case 9:
    //                 mesPtBR = "outubro"
    //                 break
    //             case 10:
    //                 mesPtBR = "novembro"
    //                 break
    //             case 11:
    //                 mesPtBR = "dezembro"
    //                 break
    //             default:
    //                 mesPtBR = ""
    //                 break;
    //         }

    //         return mesPtBR
    //     }

    //     function zeroLeft (value) {
    //         return value >= 10 ? value : `0${value}`
    //     }

    //     return `${diaDaSemanaPtBR}, ${dia} de ${mesPtBR} de ${ano} as ${horas}:${minutos}`
    // }

    const setInput = (input, value) => {
        input.textContent = value
    }

    // setInput(inputData, formatarEmPtBR(data))
    setInput(inputData, data.toLocaleString('pt-BR', options))
}

data()