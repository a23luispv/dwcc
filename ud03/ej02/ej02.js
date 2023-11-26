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

//3.Amosa a data actual en diferentes formatos segundo o valor que meta o usuario por parámetro (usa un switch)
function formatoFecha(dataString, formato) {
  let fecha = new Date(dataString);

  switch (formato) {
      case 1:
          return fecha.toLocaleDateString('en-US');
      case 2:
          return fecha.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      case 3:
          return fecha.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }
}

//let fechaActual = new Date();   <-declarada en el ej1.
console.log(formatoFecha(fechaActual, 1));
console.log(formatoFecha(fechaActual, 2));
console.log(formatoFecha(fechaActual, 3));


//3.Amosa a hora actual en diferentes formatos segundo o valor que meta o usuario por parámetro (usa un switch):

function formatearHora(formato) {
  //let fechaActual = new Date();   <-declarada en el ej1.

  let horas = fechaActual.getHours();
  let minutos = fechaActual.getMinutes();
  let segundos = fechaActual.getSeconds();
  let ampm = horas >= 12 ? 'PM' : 'AM';

  switch (formato) {
      case 1:
          //Digital 'normal'
          return `${horas}:${minutos}:${segundos}`;
      case 2:
          //Con PM/AM
          horas = horas % 12 || 12;
          return `${horas}:${minutos} ${ampm}`;
  }
}
console.log(formatearHora(1));
console.log(formatearHora(2));