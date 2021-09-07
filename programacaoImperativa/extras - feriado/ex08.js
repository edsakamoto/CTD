/*
Dado que a fórmula para conversão de Fahrenheit para Celsius é JS = 5/9 (F – 32), leu um valor de temperatura em Fahrenheit e exibi-lo em Celsius

*/

let f = 100;

function converterFahrenheitParaCelsius(x){
    
    return (5/9 * (x-32)).toFixed(2);
}

console.log(converterFahrenheitParaCelsius(f));