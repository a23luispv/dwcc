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

//5.Engade un país ao final do Array.

paises.push("USA");
console.log("Verificar añadido o final : " + paises);

//6.Elimina un elemento ao comezo do Array e indica cal foi.

eliminadoComezo = paises.shift();
console.log("Eliminouse o elemento: "+eliminadoComezo);

//7.Elimina un elemento ao final do Array e indica cal foi

eliminadoFinal =paises.pop();
console.log("Eliminouse o elemento: "+eliminadoFinal);

//8.Amosa o elemento que se atope na posición que che indique o usuario

posicionUsuario = 2;
console.log("Elemento en la posición " +posicionUsuario +" : " + paises[posicionUsuario]);

//9.Amosa a posición na que se atopa un elemento indicado polo usuario

paisUsuario = "Irlanda";
posicionPaisUsuario = paises.indexOf(paisUsuario);
console.log("Posición de " + paisUsuario + " : " + posicionPaisUsuario);
