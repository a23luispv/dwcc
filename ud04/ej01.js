let paises = ["España", "Portugal", "Francia", "Irlanda"];

//1.Amosa o número de elementos do Array
console.log("Nº países array: " + paises.length);

//2.Amosa todos os países.
console.log("Todos os países: " + paises);

//3.Amosa todos os países en sentido inverso. Ollo, que o Array orixinal non
//quede modificado, é dicir, que non quede ordenado ao revés.
console.log("Todos os países en sentido inverso:", paises.slice().reverse());
//console.log("Todos os países: " + paises);

//4.Engade un país ao comezo do Array.
paises.unshift("UK");
console.log("Verificar añadido o comezo : " + paises);