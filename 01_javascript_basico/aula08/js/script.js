const nome = "lucas";
const altura = 1.60;
const peso = 50;
let message = `${nome} tem ${altura}m de altura, pesando ${peso}kg. `;

const imc = peso / (altura ** 2);

message = message + `Logo o seu imc é ${imc.toFixed(2)}`;

console.log(message)
