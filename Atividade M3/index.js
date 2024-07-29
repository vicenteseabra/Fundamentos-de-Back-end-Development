//importa o que sera usado posteriormente
const prompt = require("prompt-sync")();
const ContaCorrente = require("./corrente");
const ContaPoupanca = require("./poupanca");

// Função para solicitar um número ao usuário
function promptNumber(message, minimo, maximo) {
    let number;
    while (true) {
        let input = prompt(message);
        number = parseFloat(input);
        if (!isNaN(number) && number >= minimo && number <= maximo) {
            break;
        }
        console.log("Por favor, insira um valor numérico válido.");
    }
    return number;
}

// Capta os dados da conta
const nome = prompt("Nome do Titular da Conta: ");
const saldo = promptNumber("Saldo da Conta: ", -Number.MAX_VALUE, Number.MAX_VALUE);

// Capta o tipo da conta
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
    var juros = promptNumber("Taxa de Juros: ", 0, 100);
    conta = new ContaCorrente(juros, nome, saldo);
    conta.validaJuros();

}
else{
    var rendimento = promptNumber("Rendimento: ", 0, 100);
    conta = new ContaPoupanca(rendimento, nome, saldo);
    conta.validaRendimento();

}
conta.validar();

//console.log(conta); // somente para teste

//Teste de movimentações na conta
let movimentar = true;
while(movimentar){
    console.log("Deseja fazer alguma movimentação?\n - Sim: Digite 1\n - Não: Digite 0")
    let resposta =  promptNumber("", 0, 1);
    if(resposta == 1){
        console.log("- Sacar: Digite 0");
        console.log("- Depositar: Digite 1");

        //testa se a conta é corrente ou poupança
        if(conta instanceof ContaCorrente){console.log("- Aplicar Juros: Digite 3");}
        else{console.log("- Aplicar Rendimento: Digite 4");}

        //faz a operação de acordo com o numero digitado
        let operacao = promptNumber("", 0, 4);
        if(operacao==0){
            console.log(`Saldo atual: ${conta.saldo}`);
            const valor = promptNumber("Qual valor deseja sacar? ", 0, conta.saldo);
            conta.sacar(valor);
            console.log(`Saldo após depósito: ${conta.saldo}`);
        }else if(operacao==1){
            console.log(`Saldo atual: ${conta.saldo}`);
            const valor = promptNumber("Qual valor deseja depositar? ", 0, Number.MAX_VALUE);
            conta.depositar(valor);
            console.log(`Saldo após depósito: ${conta.saldo}`);
        }else if(operacao==3){
            console.log(`Saldo atual: ${conta.saldo}`);
            conta.aplicarJuros();
            console.log(`Saldo após Aplicar Juros: ${conta.saldo}`);
        }else{
            console.log(`Saldo atual: ${conta.saldo}`);
            conta.aplicarRendimento();
            console.log(`Saldo após Aplicar Rendimento: ${conta.saldo}`);
        }
    }else{
        //encerra as movimentações na conta
        console.log(`Obrigado, volte sempre ${nome}!`);
        movimentar = false;
    }
}