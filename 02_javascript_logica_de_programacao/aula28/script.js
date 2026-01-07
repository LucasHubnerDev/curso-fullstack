
// Date em JavaScript — Guia Completo com Exemplos

// 1. Date como função construtora

// Se NÃO passar nenhum valor → data e hora atual
const dataAtual = new Date();
console.log("Data atual:");
console.log(dataAtual);
console.log(dataAtual.toString());

// 2. Timestamp Unix (marco zero)

// 0 milissegundos desde 01/01/1970 00:00:00 UTC
const marcoZero = new Date(0);
console.log("\nMarco zero (Unix Timestamp):");
console.log(marcoZero.toString());

// 3. Trabalhando com milissegundos

const tresHoras = 60 * 60 * 3 * 1000; // 3h em ms
const umDia = 60 * 60 * 24 * 1000;   // 1 dia em ms

const outraData = new Date(0 + umDia);
console.log("\nUm dia após o marco zero:");
console.log(outraData.toString());

// 4. Criando data passando valores separados

// new Date(ano, mês, dia, hora, minuto, segundo, ms)
// O mês começa em 0 (0 = janeiro, 11 = dezembro)

const dataManual = new Date(2025, 3, 20, 5, 20, 10, 50);
console.log("\nData criada manualmente:");
console.log(dataManual.toString());

// O Date ajusta automaticamente valores extrapolados
const dataAjustada = new Date(2025, 0, 40); // 40 de janeiro
console.log("\nData com valores extrapolados:");
console.log(dataAjustada.toString());

// 5. Criando Date com string (formato ISO)

// Sempre prefira o formato ISO (YYYY-MM-DD HH:mm:ss)
const dataString = new Date("2008-04-29 11:30:25");
console.log("\nData criada a partir de string:");
console.log(dataString.toString());

// 6. Métodos GET (obter partes da data)

const data = new Date();

const milissegundos = data.getMilliseconds();
const segundos = data.getSeconds();
const minutos = data.getMinutes();
const horas = data.getHours();
const dia = data.getDate();
const mes = data.getMonth() + 1; // mês começa em 0
const ano = data.getFullYear();
const diaSemana = data.getDay(); // 0 = Domingo | 6 = Sábado

console.log("\nPartes da data:");
console.log(`Hoje é ${dia}/${mes}/${ano}`);
console.log(`Horário: ${horas}:${minutos}:${segundos}`);
console.log(`Dia da semana: ${diaSemana}`);

// Exemplo de uso prático
console.log(
  `\nHoje, em ${dia}/${mes}/${ano} às ${horas}:${minutos}:${segundos}, estou estudando Date`
);

// 7. Date.now()

// Retorna os milissegundos desde 01/01/1970
const milisegundosAgora = Date.now();
const dataFromNow = new Date(milisegundosAgora);

console.log("\nDate.now():");
console.log(milisegundosAgora);
console.log(dataFromNow.toString());

// 8. Função para formatar data (DD/MM/YYYY HH:mm:ss)

const formatarData = (data) => {
  function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
  }

  const segundos = zeroAEsquerda(data.getSeconds());
  const minutos = zeroAEsquerda(data.getMinutes());
  const horas = zeroAEsquerda(data.getHours());
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = data.getFullYear();

  return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
};

const dataDesformatada = new Date();
const dataFormatada = formatarData(dataDesformatada);

console.log("\nData formatada:");
console.log(dataFormatada);

// 9. Comparando datas

const hoje = new Date();
const futuro = new Date(2026, 0, 1);

if (futuro > hoje) {
  console.log("\nA data futura é maior que hoje");
}

// 10. Dica moderna: Intl.DateTimeFormat

const formatadorBR = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "short",
  timeStyle: "medium",
});

console.log("\nUsando Intl.DateTimeFormat:");
console.log(formatadorBR.format(new Date()));
