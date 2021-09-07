/*
Faça um algoritmo para calcular a nota semestral de um aluno. A nota semestral é obtida pela média aritmética entre a nota de 2 bimestres. Cada nota de bimestre é composta por 2 notas de provas.
*/

let notaA = 7;
let notaB = 6.5;
let notaC = 4;
let notaD = 10;


function notaSemestral(n1,n2,n3,n4){
    let bim1 = (n1 + n2) / 2; //6,75
    let bim2 = (n3 + n4) / 2; //7
    return (bim1 + bim2) / 2;
}

console.log(notaSemestral(notaA,notaB,notaC,notaD));