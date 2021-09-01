let i = 0;
let impares = [];
let pares = [];
while(i <= 100){
    if (i % 2 == 1){
        impares.push(i);        
    } else{
        pares.push(i);
    }
    i++;
}
console.log(pares.join(', '));
console.log('==========================');
console.log(impares.join(', '));

let nroAlunos = 0
