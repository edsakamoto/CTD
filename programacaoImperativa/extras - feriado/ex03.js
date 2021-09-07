/* 
Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma
*/

let raio = 5;

function areaCircunferencia(r){
    return Math.PI * (r ** 2);
}

function perimetroCircunferencia(r){
    return (2 * r) * Math.PI;
}

console.log(areaCircunferencia(raio));
console.log(perimetroCircunferencia(raio));


