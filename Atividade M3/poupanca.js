const Conta = require('./conta');

class ContaPoupanca extends Conta{
    constructor(rendimento, titular, saldo){
        super(titular, saldo);
        this.rendimento = rendimento;
    }
    aplicarRendimento(rendimento){
        this.saldo *= rendimento;
    }
}
module.exports = ContaPoupanca;