// | string | number | boolean | undefined | null | symbol |

const nome1 = "L" // string
const nome2 = 'L' // string
const nome3 = `L` // string

const num1 = 12; // number
const num2 = 12.50 // number

let nomeAluno; // undefined, não aponta para local nenhum na memória
let sobrenomeAluno = null; // Nulo, tambèm não aponta para local nenhum na memória, só que é proposital.

const aprovado = true; // Boolean -> valor lógico
const reprovado = false; // Boolean -> valor lógico

console.log(typeof aprovado, aprovado); // type, value
console.log(typeof nomeAluno, nomeAluno); // undefined, undefined
console.log(typeof sobrenomeAluno, sobrenomeAluno); // Object, null