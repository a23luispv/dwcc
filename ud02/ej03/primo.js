//Indicar se un número é primo ou non. A entrada de datos podes facela como queiras (prompt, fixa,...)
let num = 3;
let ePrimo=true;

if (num <= 1){
    ePrimo = false;
}else{
    //console.log('entro');
    for(i = 2; i < num; i++){
        if(num % i == 0){
            ePrimo = false;
            //console.log('no primo');
        }
    }
}

console.log(`¿El número ${num} es primo?: ${ePrimo ? 'si':'no'}`);