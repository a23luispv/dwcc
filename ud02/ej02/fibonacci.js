let a = 0;
let b = 1;
let temporal;
let linea=[];

console.log('primeros 10:')
for(i=0; i <=9; i++){
    //console.log(`vuelta ${i}`)
    console.log(b)
   linea.push(b);

    temporal = a;
    a=b;
    b=temporal+b;
}
//intento de mejora, tratando de ponerlo en una línea guardado en el array
console.log(linea)