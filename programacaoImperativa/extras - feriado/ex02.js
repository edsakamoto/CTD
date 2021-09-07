/* 
Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo.
*/

let tamLadoQuadrado = 5;

function areaQuadrado(tamanhoDeUmLadoQuadrado){
    return tamanhoDeUmLadoQuadrado ** 2;
}

function perimetroQuadrado(tamanhoDeUmLadoQuadrado){
    return tamanhoDeUmLadoQuadrado * 4;
}

console.log(areaQuadrado(tamLadoQuadrado));
console.log(perimetroQuadrado(tamLadoQuadrado));


