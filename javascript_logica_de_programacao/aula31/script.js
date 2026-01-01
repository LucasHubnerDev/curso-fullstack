// ------------------------------
// VAR, LET e CONST
// ------------------------------

// VAR: função-scope (escopo de função) ou global se estiver fora de funções
// Pode ser redeclarada e reatribuída
var idade = 25;
console.log("VAR - idade inicial:", idade);

idade = 30; // reatribuindo -> ok
console.log("VAR - idade reatribuída:", idade);

var idade = 35; // redeclarando -> ok também
console.log("VAR - idade redeclarada:", idade);

// Escopo de bloco (como dentro de if) não protege VAR
if (true) {
  var idade = 40; // isso sobrescreve a var global!
  console.log("VAR dentro do if:", idade);
}
console.log("VAR fora do if:", idade); // 40, mudou globalmente 😬


// ------------------------------
// LET: bloco-scope (escopo de bloco) 
// Pode ser reatribuída, mas não redeclarada no mesmo escopo
// ------------------------------
let altura = 1.75;
console.log("LET - altura inicial:", altura);

altura = 1.8; // reatribuindo -> ok
console.log("LET - altura reatribuída:", altura);

// let altura = 1.85; // ❌ ERRO: não pode redeclarar no mesmo escopo

if (true) {
  let altura = 1.9; // isso é uma variável **nova**, só existe dentro do if
  console.log("LET dentro do if:", altura);
}
console.log("LET fora do if:", altura); // 1.8, não mudou 😎


// ------------------------------
// CONST: bloco-scope também
// Não pode ser redeclarada nem reatribuída
// ------------------------------
const peso = 70;
console.log("CONST - peso:", peso);

// peso = 75; // ❌ ERRO: não pode reatribuir

if (true) {
  const peso = 80; // ok, é uma variável **nova**, só existe dentro do bloco
  console.log("CONST dentro do if:", peso);
}
console.log("CONST fora do if:", peso); // 70, não mudou 😌

// IMPORTANTE: objetos e arrays podem ser modificados, mas não podem ser reatribuídos
const pessoa = { nome: "Lucas", idade: 18 };
pessoa.idade = 19; // ✅ ok, mudando a propriedade
console.log("Objeto modificado:", pessoa);

// pessoa = { nome: "Ana" }; // ❌ ERRO: não pode reatribuir todo o objeto
