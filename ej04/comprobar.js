function grupoIdade() {
    let idade =  Number(document.getElementById('nIdade').value);
    let grupo = '';

    if(idade >= 0 && idade <= 12) {
        grupo = 'Grupo: Neno';
    } else if(idade >=13 && idade <=18){
        grupo = 'Grupo: Adolescente';
    } else if(idade >= 19 && idade <=30){
        grupo = 'Grupo: Xoven';
    } else if(idade >= 31 && idade <=64){
        grupo = 'Grupo: Adulto';
    } else if(idade >= 65 && idade <=100){
        grupo = 'Grupo: Xubilado';
    } else {
        grupo = 'A idade ten que ser entre 0 e 100'
    }

    document.getElementById('teuGrupo').innerText = grupo;
    return false;
}
