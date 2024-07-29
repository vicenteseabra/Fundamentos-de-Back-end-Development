const Conta = require('./conta');

class ContaPoupanca extends Conta{
    //metodo construtor
    constructor(rendimento, titular, saldo){
        super(titular, saldo);
        this.rendimento = rendimento;
    }
    aplicarRendimento(){
        this.saldo *= this.rendimento;//multiplica o valor do rendimento pelo saldo atual
    }
    validaRendimento(){
        //Valida o valor atribuido ao rendimento
        if(typeof(this.rendimento)!="number"){
            throw new Error("Rendimento deve ser do tipo Number");
        }else if(this.rendimento < 0){
            throw new Error("Rendimento deve ser maior que zero");
        }

    }
}
module.exports = ContaPoupanca;