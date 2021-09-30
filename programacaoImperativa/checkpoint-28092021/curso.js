
let alunos = require('./aluno');

let curso = {
    nomeDoCurso: 'xpto',
    notaDeAprovacao: 8,
    faltaMaxima: 7,
    listaDeEstudante: alunos.listaDeAlunos,
    adicionaAluno: function(nome,quantidadeFaltas,notas){
        let novoAluno = new alunos.aluno.Aluno(nome,quantidadeFaltas,notas)
        this.listaDeEstudante.push(novoAluno)
    },
    aprovadoReprovado: function(nomeAluno){        
        for(let i = 0; i < this.listaDeEstudante.length;i++){           
            if(this.listaDeEstudante[i].nome === nomeAluno){
                if(this.listaDeEstudante[i].calcularMedia() >= this.notaDeAprovacao && this.listaDeEstudante[i].quantidadeFaltas < this.faltaMaxima){
                    return true;
                }else if (this.listaDeEstudante[i].calcularMedia() >= this.notaDeAprovacao * 1.1 && this.listaDeEstudante[i].quantidadeFaltas == this.faltaMaxima){
                    return true;
                } else { return false;}                
            } 
        } return `Não existe aluno com o nome ${nomeAluno}`;   
    },
    resultado: function(){
        nomes = [];
        resultados = [];
        for (let i = 0; i < this.listaDeEstudante.length; i++){            
            nomes.push(this.listaDeEstudante[i].nome);            
        };
        for(let z=0; z < nomes.length; z++){
            resultados.push(this.aprovadoReprovado(nomes[z]));
        } //return resultados;
        
        let j = []
        for (let a = 0; a < this.listaDeEstudante.length; a++){            
                j.push({'aluno': nomes[a], 'aprovado': resultados[a]});
            } return j;
        //let jSON = JSON.stringify(nomes[]: )
    }
};


/**********************Testes********************************/
//Passo 1 - testando o construtor
alunos.aluno.Aluno('roberto',30,[1,1,1,0,5]);
console.log(alunos.aluno)

//Passo 2 - testando os metodos calcularMedia e faltas
console.log(alunos.aluno.calcularMedia());
console.log(alunos.aluno.faltas());

//Passo 3 e 4 e - testando o objeto curso e o metodo adicionar estudante
console.log(curso);
curso.adicionaAluno(alunos.aluno.nome,alunos.aluno.quantidadeFaltas,alunos.aluno.notas); 
console.log(curso.listaDeEstudante);

//Passo 5 e 6 - testando
console.log(curso.aprovadoReprovado('eduardo')) //retornará false
console.log(curso.aprovadoReprovado('sandro')) //retornará true
console.log(curso.aprovadoReprovado('zeus')) //retornará 'Não existe aluno com o nome X'

console.log(curso.resultado()); //retornará um objeto com nome do Aluno e um valor booleano se foi aprovado ou não



