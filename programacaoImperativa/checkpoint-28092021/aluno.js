
let aluno = {
    Aluno:function (nome,quantidadeFaltas,notas){        
        this.nome = nome;
        this.quantidadeFaltas = quantidadeFaltas;
        this.notas = notas; 
        this.calcularMedia = function(){
            let soma = 0;        
            for(let i=0; i<this.notas.length; i++){            
                soma += this.notas[i] 
            } return soma / this.notas.length ;
        };
        this.faltas = function(){
            return this.quantidadeFaltas += 1;
        };
    }
};


/*Testando se o construtor criado está funcionando*/
let aluno1 = new aluno.Aluno('eduardo',8,[8,8.5,10,9]);
let aluno2 = new aluno.Aluno('sandro',5,[10,10,10,10,10]);
let aluno3 = new aluno.Aluno('monica',3,[10,10,7,9,9]);
let aluno4 = new aluno.Aluno('andressa',2,[8,3,4,2,10]);
// console.log(aluno1.faltas());
// console.log(aluno1.quantidadeFaltas);


//lista de alunos
//aluno.listaAlunos = [aluno1,aluno2,aluno3,aluno4];
let listaDeAlunos =  [aluno1,aluno2,aluno3,aluno4];

/*Exportando o construtor como modulo Aluno*/


module.exports = {
    aluno: aluno,
    listaDeAlunos: listaDeAlunos    
}


