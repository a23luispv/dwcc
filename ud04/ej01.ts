var paises: string[] = ["España", "Portugal", "Francia", "Irlanda"];

//1.Amosa o número de elementos do Array
function arrLength(array: string[]): number {
    return array.length;
}
console.log("Nº países array: " + arrLength(paises));

//2.Amosa todos os países.

function pintarArray(array: string[]): void {
    console.log("Todos os países: " + array);
}
pintarArray(paises);

//3.Amosa todos os países en sentido inverso. Ollo, que o Array orixinal non
//quede modificado, é dicir, que non quede ordenado ao revés.
function inversoArray(array: string[]): string[] {
    return [...array].reverse();
}
console.log("Todos os países en sentido inverso:", inversoArray(paises));
//console.log("Todos os países: " + paises);

//4.Engade un país ao comezo do Array.

function addPais(pais: string): void {
    paises.unshift(pais);
}
addPais("UK");
console.log("Verificar añadido o comezo : " + paises);

//5.Engade un país ao final do Array.

function addPaisAlFinal(pais: string): void {
    paises.push(pais);
}
addPaisAlFinal("USA");
console.log("Verificar añadido o final : " + paises);

//6.Elimina un elemento ao comezo do Array e indica cal foi.

function deleteComezo(): void {
    paises.shift();
}
const eliminadoComezo: string | undefined = paises[0];
deleteComezo();
console.log("Eliminouse o elemento: " + eliminadoComezo);

//7.Elimina un elemento ao final do Array e indica cal foi

function deleteFinal(): void {
    paises.pop();
}
var eliminadoFinal: string | undefined = paises[paises.length - 1];
deleteFinal();
console.log("Eliminouse o elemento: " + eliminadoFinal);

//8.Amosa o elemento que se atope na posición que che indique o usuario

function paisUsuario(posicionUsuario: number): string | undefined {
    return paises[posicionUsuario];
}
const posicionUsuario: number = 2;
console.log("Elemento en la posición " + posicionUsuario + " : " + paisUsuario(posicionUsuario));

//9.Amosa a posición na que se atopa un elemento indicado polo usuario

function posicionPaisUsuario(paisUsuario: string): number {
    return paises.indexOf(paisUsuario);
}
const paisUsuarioBuscado: string = "Irlanda";
console.log("Posición de " + paisUsuarioBuscado + " : " + posicionPaisUsuario(paisUsuarioBuscado));

//10.Amosa os elementos que se atopan entre dúas posicións indicadas polo usuario.

function paisesSlice(inicio: number, fin: number): string[] {
    return paises.slice(inicio, fin + 1);
}
var posicioninicio: number = 0;
var posicionfin: number = 2;
console.log("Elementos entre las posiciones", posicioninicio, "y", posicionfin, ":", paisesSlice(posicioninicio, posicionfin));