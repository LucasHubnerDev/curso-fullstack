// Funções geradoras

// function* geradora1() {
//     // código
//     yield 'Valor 1';
//     // código
//     yield 'Valor 2';
//     // código
//     yield 'Valor 3';
// }

// const g1 = geradora1();
// console.log(g1)
// console.log(g1.next())
// console.log(g1.next().value)
// console.log(g1.next())
// console.log(g1.next())

// for (let valor of g1) {
//     console.log(valor)
// }

// function* contador(limit) {
//     for(let i = 0; i <= limit; i++){
//         yield `value ${i}`
//     }
// }

// const g2 = contador(5)
// console.log(g2.next())
// console.log(g2.next().value)
// console.log(g2.next())
// console.log(g2.next().value)
// console.log(g2.next())
// console.log(g2.next())
// console.log(g2.next().done)

// function* gerador3() {
//     yield 0;
//     yield 1;
//     yield 2;
// }

// // delegando função geradora
// function* gerador4() {
//     yield* gerador3();
//     yield 3;
//     yield 4;
//     yield 5;
// }

// const g4 = gerador4();

// for(let valor of g4){
//     console.log(valor)
// }

function* geradora5() {
    yield () => {
        console.log("vim do yield 1")
    };

    //...

    yield () => {
        console.log("vim do yield 2")
    }
}

const g5 = geradora5();

const func1 = g5.next().value
const func2 = g5.next().value

func1()
func2()