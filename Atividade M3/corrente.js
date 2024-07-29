const Conta = require('./conta');

class ContaCorrente extends Conta{
    constructor(juros, titular, saldo){
        super(titular, saldo);
        this.juros = juros;
    }
    aplicarJuros(){
        this.saldo *= this.juros;
    }
    validaJuros(){
        if(typeof(this.juros)!="number"){
            throw new Error("O Juros deve ser do tipo Number");
        }else if(this.juros < 0){
            throw new Error("Juros deve ser maior que zero");
        }
    }
}
module.exports = ContaCorrente;