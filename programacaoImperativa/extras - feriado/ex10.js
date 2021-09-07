/*
Faça um algoritmo que transforme uma velocidade fornecida em m/s pelo usuário para
Km/h. Para tal, multiplique o valor em m/s por 3,6.
*/

let velMetroSeg = 100;
function convertMetroSegundoParaKmHora(x){
    let convertido = x * 3.6
    return `${x} m/seg equivale à ${convertido} km/hr`
}

console.log(convertMetroSegundoParaKmHora(velMetroSeg))