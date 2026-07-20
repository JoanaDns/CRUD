
let alunos = [
    {
        nome: "Helena" ,
        notas: [8,10,6]
    },
    {
        nome: "Luan" ,
        notas: [7,9]
    }
];

function buscarAlunos(nome){
    for(let i = 0; i < alunos.length; i++){
     if (alunos[i].nome.toLowerCase() === nome.toLowerCase()){
        return alunos[i];
     }

    }
    return undefined;
}

console.log(buscarAlunos("Helena"));


function calcularMedia(alunos){
    if(notas.length === 0){
        return 0;
    }
    
    let soma = 0;

    for(let i = 0; i < alunos.notas.length; i++){
        soma += notas[i]
    }

    return soma / notas.length;
}


console.log(calcularMedia("Helena"));

function situacao(Media){
    if (Media >= 6){
        return "APROVADO";

    }
    else if (Media >= 4){
        return "RECUPERANDO";

    }
    else {
        return "REPROVADO";

    }
}

let media = calcularMedia(alunos[0]);

console.log(situacao(Media));