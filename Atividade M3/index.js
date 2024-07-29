const ContaCorrente = require("./corrente");
const ContaPoupanca = require("./poupanca");

nome = prompt("Nome do Titular da Conta: ");
saldo = prompt("Saldo da Conta: ");
tipo = prompt("Tipo da Conta: ");

if(tipo == "corrente"){
    var juros = prompt("Taxa de Juros: ");
    const conta_corrente = new ContaCorrente(juros, nome, saldo);
}
else(
    rendimento = prompt("Rendimento: ");
    const conta_poupanca = new ContaPoupanca(rendimento, nome, saldo);
)
console.log(conta_poupanca);
console.log(conta_corrente);