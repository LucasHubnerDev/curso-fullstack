// Funções recursivas
// o JS interrompe o código se ele for executado muitas vezes

function recursiva(max) {
    console.log(max)
    if(max >= 1000) return
    max++;
    recursiva(max)
}
recursiva(0)