/* 
Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu perímetro.
*/

let bse = 4;
let alt = 10;

function areaRetangulo(base, altura){
    return base * altura;
}

function perimetroRetangulo(base, altura){
    return 2 * (base + altura);
}

console.log(areaRetangulo(bse,alt));
console.log(perimetroRetangulo(bse,alt));