//1.Amosar o número de días que quedan dende hoxe (día actual) ata final de curso (por exemplo, o 25 de Xuño).

let fechaActual = new Date();
let fechaFinalCurso = new Date('2024-06-25');
//Diferencia en milisegundos
let diferenciaTiempoFinal = fechaFinalCurso.getTime() - fechaActual.getTime();
//Pasamos a días
let diasRestantesFinal = Math.ceil(diferenciaTiempoFinal / (1000 * 60 * 60 * 24));

console.log("Días restantes hasta final del curso: " + diasRestantesFinal + " días");

