
/*3.Agora que sabemos como representar usuários e suas contas, o cliente nos forneceu uma lista de contas que devemos ser capazes de criar. Para isso, devemos gerar uma função construtora que facilite a criação das contas bancárias correspondentes mais rapidamente. */
function Conta(numConta, tpConta, saldo, titular){
    this.numConta = numConta;
    this.tpConta = tpConta;
    this.saldo = saldo;
    this.titular = titular;
}

let conta1  = new Conta(5486273622 ,"Conta Corrente",27771,"Abigael Natte")
let conta2  = new Conta(1183971869 ,"Conta Poupança",8675 ,"Ramon Connell")
let conta3  = new Conta(9582019689 ,"Conta Poupança",27363,"Jarret Lafuente")
let conta4  = new Conta(1761924656 ,"Conta Poupança",32415,"Ansel Ardley")
let conta5  = new Conta(7401971607 ,"Conta Poupança",18789,"Jacki Shurmer")
let conta6  = new Conta(630841470  ,"Conta Corrente",28776,"Jobi Mawtus")
let conta7  = new Conta(4223508636 ,"Conta Corrente",2177 ,"Thomasin Latour")
let conta8  = new Conta(185979521  ,"Conta Poupança",25994,"Lonnie Verheijden")
let conta9  = new Conta(3151956165 ,"Conta Corrente",7601 ,"Alonso Wannan")
let conta10 = new Conta(2138105881,"Conta Poupança",33196,"Bendite Huggett")

//console.log(conta1.numConta);
/*4.A partir dos 10 usuários, gereuma lista onde todos eles convergem (lista de objetos)*/

let contas = [conta1,conta2,conta3,conta4,conta5,conta6,conta7,conta8,conta9,conta10]
//console.log(contas)

/*
5.Também nos pedem a criação de um objeto literal chamado banco que terá uma propriedade chamada clientes, ele será composto pela lista de objetos gerados no ponto anterior.

6.o objeto do banco criará um método chamado consultarCliente que receberá um nome (titular) por parâmetro e deve pesquisar na lista de contas e retornar ao objeto do cliente que corresponde a esse nome inserido
*/

let banco = {
    clientes:  contas,
    consultarCliente: function(titular){
        for(i = 0; i<contas.length; i++){
            if (contas[i].titular === titular){
                return contas[i];
            }
        }
    },
    deposito: function(titular,dinheiro){
        this.consultarCliente(titular).saldo +=  dinheiro
        return `Deposito realizado, seu novo saldo é ${new this.consultarCliente(titular).saldo}`
    },
    saque: function(titular,dinheiro){
        let saldo = this.consultarCliente(titular).saldo
        if (saldo < dinheiro) {
            return `Saldo INSUFICIENTE! Saldo Atual: ${saldo} | Saque solicitado: ${dinheiro}`
        } else { 
            this.consultarCliente(titular).saldo = new this.consultarCliente(titular).saldo - dinheiro
            return `Saque realizado, seu novo saldo é ${this.consultarCliente(titular).saldo}`
        }
        
    }

}

console.log(banco.saque("Bendite Huggett",100));
console.log(banco.saque("Bendite Huggett",200));