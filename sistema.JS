
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


function calcularMedia
(alunos){
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

function cadastrarAluno() {
    let nome = prompt("Digite o nome do aluno:");

    if(buscarAlunos(nome)!== undefined){
        alert("Aluno já está cadastrado! ");
    
        return;
    }

    alunos.push({
        nome: nome,
        notas: []
    });

    alert("Aluno cadastrado com sucesso!");
}

function listarAlunos() {
    if (alunos.length === 0) {
        alert("Nenhum aluno cadastrado");
        return;
    }

    let texto = "Alunos cadastrados: \n";

    for (let i = 0; i < alunos.length; i++) {
        texto += alunos[i].nome + "\n";
    }

    alert(texto);
}

function removerAluno() {
    let nome = prompt("Digite o nome do aluno que deseja remover:");

    let aluno = buscarAluno(nome);

    if (aluno === undefined) {
        alert("Aluno não encontrado!");
        return;
    }

    let posicao = alunos.indexOf(aluno);

    alunos.splice(posicao, 1);

    alert("Aluno removido com sucesso!");
}

function lancarNota(){
    let nome = promp("Digite o nome do aluno: ")
    let alunos = buscarAlunos(nome);

    if(alunos === undefined) {
        alert("Aluno não encontrado! ");
        return;
    }

    let nota = Number(prompt("Digite a nota: "));

    if (nota < 0 || nota > 10 ){
        alert("Nota inválida.");
        return;
    }
alunos.notas.push(nota);

alert("Nota lançada com sucesso!");
    
}     
  function verBoletim(){
    let nome = prompt("Digite o nome do aluno: ");

    let aluno = buscarAlunos(nome);

   if(aluno === undefined) {
       alert("Aluno não encontrado! ")
       return;
   }

   let media = calcularMedia(alunos);
   let resultado = situacao(media);

   alert(
     "Nome: " + Aluno.nome +
     "\nNotas: " + Aluno.notas.join(" , ") +
     "\nMédias" + media.toFixed(2) +
     "\nSituação: " + resultado 
   );
} 

function totalDeAlunos() {
    alert("Total de alunos: " + alunos.length);
}

function mediaGeralDaTurma() {
    if (alunos.length === 0) {
        alert("Nenhum aluno cadastrado.");
        return;
    }

    let soma = 0;

    for (let i = 0; i < alunos.length; i++) {
        soma += calcularMedia(alunos[i]);
    }

    let media = soma / alunos.length;

    alert("Média geral da turma: " + media.toFixed(2));
}

function listarAprovados() {
    let texto = "";
    let encontrou = false;

    for (let i = 0; i < alunos.length; i++) {
        let media = calcularMedia(alunos[i]);

        if (situacao(media) === "APROVADO") {
            texto += alunos[i].nome + " - Média: " + media.toFixed(2) + "\n";
            encontrou = true;
        }
    }

    if (!encontrou) {
        alert("Ainda não há aprovados.");
        return;
    }

    alert(texto);
}

function submenuCadastro() {
    let opcao;

    do {
        opcao = Number(prompt(
            "=== CADASTRO ===\n" +
            "1 - Cadastrar aluno\n" +
            "2 - Listar alunos\n" +
            "3 - Remover aluno\n" +
            "0 - Voltar"
        ));

        switch (opcao) {
            case 1:
                cadastrarAluno();
                break;
            case 2:
                listarAlunos();
                break;
            case 3:
                removerAluno();
                break;
            case 0:
                break;
            default:
                alert("Opção inválida!");
        }
    } while (opcao !== 0);
}

function submenuNotas() {
    let opcao;

    do {
        opcao = Number(prompt(
            "=== NOTAS ===\n" +
            "1 - Lançar nota\n" +
            "2 - Ver boletim do aluno\n" +
            "0 - Voltar"
        ));

        switch (opcao) {
            case 1:
                lancarNota();
                break;
            case 2:
                verBoletim();
                break;
            case 0:
                break;
            default:
                alert("Opção inválida!");
        }
    } while (opcao !== 0);
}
function menuPrincipal() {
    let opcao;

    do {
        opcao = Number(prompt(
            "=== SISTEMA ESCOLAR ===\n" +
            "1 - Cadastro\n" +
            "2 - Notas\n" +
            "3 - Relatórios\n" +
            "0 - Sair"
        ));

        switch (opcao) {
            case 1:
                submenuCadastro();
                break;
            case 2:
                submenuNotas();
                break;
            case 3:
                submenuRelatorios();
                break;
            case 0:
                alert("Sistema encerrado!");
                break;
            default:
                alert("Opção inválida!");
        }
    } while (opcao !== 0);
}

