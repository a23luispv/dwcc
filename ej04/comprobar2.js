function grupoIdade() {
    let idade =  Number(document.getElementById('nIdade').value);
    let grupo = '';

    switch (true) {
        case (idade >= 0 && idade <= 12):
            grupo = 'Grupo: Neno';
            break;
        case (idade >= 13 && idade <= 18):
            grupo = 'Grupo: Adolescente';
            break;
        case (idade >= 19 && idade <= 30):
            grupo = 'Grupo: Xoven';
            break;
        case (idade >= 31 && idade <= 64):
            grupo = 'Grupo: Adulto';
            break;
        case (idade >= 65 && idade <= 100):
            grupo = 'Grupo: Xubilado';
            break;
        default:
            grupo = 'A idade ten que ser entre 0 e 100';
    }

    
    document.getElementById('teuGrupo').innerText = grupo;
    return false;
}
