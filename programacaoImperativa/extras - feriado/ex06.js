/* 
Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles.
*/

let x = 361;
let y = 30;

function quociente(x,y){
    return x / y;
}

function resto(x,y){
    return x % y;    
}

console.log(quociente(x,y));
console.log(resto(x,y));