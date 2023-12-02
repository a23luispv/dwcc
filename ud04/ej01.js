let paises = ["España", "Portugal", "Francia", "Irlanda"];

//1.Amosa o número de elementos do Array

function arrLength(array){
    return array.length;
}

console.log("Nº países array: " + arrLength(paises));

//2.Amosa todos os países.

function pintarArray(array){
    return console.log("Todos os países: " + array);
}
pintarArray(paises);

//3.Amosa todos os países en sentido inverso. Ollo, que o Array orixinal non
//quede modificado, é dicir, que non quede ordenado ao revés.

function inversoArray(array) {
    return array.slice().reverse();
}
console.log("Todos os países en sentido inverso:", inversoArray(paises));
//console.log("Todos os países: " + paises);

//4.Engade un país ao comezo do Array.

function addPais(pais){
    paises.unshift(pais);
}
addPais("UK");
console.log("Verificar añadido o comezo : " + paises);

//5.Engade un país ao final do Array.

function addPaisAlFinal(pais){
    paises.push(pais);
}
addPaisAlFinal("USA")
console.log("Verificar añadido o final : " + paises);

//6.Elimina un elemento ao comezo do Array e indica cal foi.

function deleteComezo(){
    paises.shift();
}
eliminadoComezo = paises[0];
deleteComezo();
console.log("Eliminouse o elemento: "+eliminadoComezo);

//7.Elimina un elemento ao final do Array e indica cal foi

function deleteFinal(){
    paises.pop();
}
eliminadoFinal = paises[paises.length - 1];
deleteFinal();
console.log("Eliminouse o elemento: "+eliminadoFinal);

//8.Amosa o elemento que se atope na posición que che indique o usuario

function paisUsuario(posicionUsuario){
    return paises[posicionUsuario];
}
posicionUsuario = 2;
console.log("Elemento en la posición " +posicionUsuario +" : " + paisUsuario(posicionUsuario));

//9.Amosa a posición na que se atopa un elemento indicado polo usuario

function posicionPaisUsuario(paisUsuario){
    return paises.indexOf(paisUsuario);;
}
paisUsuario = "Irlanda";
console.log("Posición de " + paisUsuario + " : " + posicionPaisUsuario(paisUsuario));

//10.Amosa os elementos que se atopan entre dúas posicións indicadas polo usuario.

function paisesSlice(inicio,fin){
    return paises.slice(inicio, fin + 1);
}
posicioninicio = 0;
posicionfin = 2;

console.log("Elementos entre las posiciones " + posicioninicio + " y " + posicionfin + " : " + paisesSlice(posicioninicio,posicionfin));
