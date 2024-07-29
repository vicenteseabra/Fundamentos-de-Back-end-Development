const prompt = require("prompt-sync")();
const ContaCorrente = require("./corrente");
const ContaPoupanca = require("./poupanca");

// Função para solicitar um número ao usuário
function promptNumber(message) {
    let number;
    while (true) {
        let input = prompt(message);
        number = parseFloat(input);
        if (!isNaN(number) && number >= 0) {
            break;
        }
        console.log("Por favor, insira um valor numérico válido.");
    }
    return number;
}

// Capta os dados da conta
const nome = prompt("Nome do Titular da Conta: ");
const saldo = promptNumber("Saldo da Conta: ");

let tipo;
while (true) {
    console.log("Qual tipo da Conta? ");
    console.log("- Corrente: Digite 1");
    console.log("- Poupança: Digite 0");
    tipo = prompt("");
    if (tipo === "1" || tipo === "0") {
        break;
    }
    console.log("Número inválido, por favor insira 1 para Corrente ou 0 para Poupança.");
}

//teste para validar os dados atribuidos a conta
let conta;
if(tipo == 1){
    var input = prompt("Taxa de Juros: ");
    juros = parseFloat(input);
    conta = new ContaCorrente(juros, nome, saldo);
    conta.validaJuros();

}
else if(tipo == 0){
    var input = prompt("Rendimento: ");
    rendimento =  parseFloat(input);
    conta = new ContaPoupanca(rendimento, nome, saldo);
    conta.validaRendimento();

}else{
    throw new Error("Número inválido");
}
//valida os dados
conta.validar();

//console.log(conta); // somente p teste


// Testa o método depositar
console.log(`Saldo atual: ${conta.saldo}`);
const valor = promptNumber("Qual valor deseja depositar? ");
conta.depositar(valor);
console.log(`Saldo após depósito: ${conta.saldo}`);
