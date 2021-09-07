/*
Solicitar a idade de uma pessoa em dias e informar na tela a idade em anos, meses e dias.
*/

let idadeEmDias = 5000;

function converteIdadeDiasParaAnos(idadeDias){
    let anos = 0;
    let meses = 0;
    let dias = 0;
    let restos = 0; //variavel para armazenar as sobras apos as virgulas para facilitar o calculo
    anos = Math.floor (idadeEmDias / 365);
    meses = Math.floor((idadeEmDias / 365 - (Math.floor(idadeEmDias / 365))) * 12);
    restos = ((idadeEmDias / 365 - (Math.floor(idadeEmDias / 365))) * 12) - Math.floor(((idadeEmDias / 365 - (Math.floor(idadeEmDias / 365))) * 12));
    dias = Math.floor(restos * 30);
    return `${idadeDias} dias é equivalente à ${anos} anos ${meses} meses e ${dias} dias.`
}

console.log(converteIdadeDiasParaAnos(idadeEmDias));



