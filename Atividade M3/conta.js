class Conta{
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(valor){
        this.saldo += valor; //adciona o valor ao saldo
    }
    sacar(valor){
        this.saldo -= valor; //diminui o valor do saldo
    }
    validar(){
        //valida o nome atribuido ao titular
        if(!this.titular){
            throw new Error("Nome do Titular não preenchido");
        }else if(typeof(this.titular) != "string"){
            throw new Error("Titular deve ser do tipo String");
        }
        //valida o saldo
        if(typeof(this.saldo)!="number"){
            throw new Error("Saldo deve ser do tipo Number");
        }
    }
}

module.exports = Conta;