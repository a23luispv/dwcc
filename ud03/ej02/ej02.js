//1.Amosar o número de días que quedan dende hoxe (día actual) ata final de curso (por exemplo, o 25 de Xuño).

let fechaActual = new Date();
let fechaFinalCurso = new Date('2024-06-25');
//Diferencia en milisegundos
let diferenciaTiempoFinal = fechaFinalCurso.getTime() - fechaActual.getTime();
//Pasamos a días
let diasRestantesFinal = Math.ceil(diferenciaTiempoFinal / (1000 * 60 * 60 * 24));

console.log("Días restantes hasta final del curso: " + diasRestantesFinal + " días");

//2.Pide a data do teu aniversario (non fai falla o ano) e saque todos os anos no que o teu aniversario vai caer en fin de semana dende este ano ata o ano 2100.
let cumple = new Date('JULY 12');
let anoActual = new Date().getFullYear();

for (let ano = anoActual; ano <= 2100; ano++) {
  
  cumple.setFullYear(ano);
  let diaSemana = cumple.getDay();

  if (diaSemana === 0 || diaSemana === 6) {
    console.log("En " + ano + " el cumple es en fin de semana.");
  }
}