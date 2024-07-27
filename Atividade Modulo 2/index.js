const prompt = require("prompt-sync")();

const nome = prompt("Nome do Aluno: ");
const numNotas = 3;
var listaMaterias = [];


function calculaNotas(){
    let notas = [];
    for (let i = 0; i < numNotas; i++) {
        notas.push(+prompt(`${i+1} - Digite a nota: `)); 
    }
    let media = 0;
    notas.forEach((value) => {media += value;});
    media =  media / numNotas;
    return media;
}


function novaMateria(){
    var materia = new Object();
    materia.nome = prompt("Nome da Materia: ");
    materia.faltas = parseInt(prompt("Numero de Faltas: "));
    materia.media = calculaNotas();
    listaMaterias.push(materia);
}


function imprimirMateria(indice){
    let imprimir = listaMaterias[indice];
    console.log(imprimir.nome+":");
    if(imprimir.faltas>5){
        console.log("REPROVADO POR FALTA");
    }else if(imprimir.media<6){
        console.log("REPROVADO POR NOTA");
    }else{
        console.log("APROVADO");
    }
    console.log("");
}
var continuar=true;
while(continuar){
    novaMateria();
    console.log("Deseja continuar? ");
    console.log("-SIM: Digite 1");
    console.log("-NÃO: Digite 0");
    let resposta = prompt("");
    if (resposta !== '1' && resposta !== '0') {
        console.log("Resposta inválida! Por favor, insira 1 para SIM ou 0 para NÃO.");
    }
    if(resposta==0){
        continuar=false;
    }

}
if(listaMaterias.length<3){
    console.log("Numero de materias insuficientes(abaixo de 3)");
}else{
    console.log(`\nAluno(a): ${nome}\n`);
    listaMaterias.forEach(imprimirMateria);
}
