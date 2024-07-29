const Conta = require('./conta');

class ContaPoupanca extends Conta{
    constructor(rendimento, titular, saldo){
        super(titular, saldo);
        this.rendimento = rendimento;
    }
    aplicarRendimento(rendimento){
        this.saldo *= rendimento;
    }
    validaRendimento(){
        if(typeof(this.rendimento)!="number"){
            throw new Error("Rendimento deve ser do tipo Number");
        }else if(this.rendimento < 0){
            throw new Error("Rendimento deve ser maior que zero");
        }

    }
}
module.exports = ContaPoupanca;