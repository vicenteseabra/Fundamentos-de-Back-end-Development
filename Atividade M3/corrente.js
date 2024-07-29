const Conta = require('./conta');

class ContaCorrente extends Conta{
    constructor(juros, titular, saldo){
        super(titular, saldo);
        this.juros = juros;
    }
    aplicarJuros(){
        saldo *= this.juros;
    }

}
module.exports = ContaCorrente;