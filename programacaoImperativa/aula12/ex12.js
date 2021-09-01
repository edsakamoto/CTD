
const alice = [0,0,0];
const bob = [0,0,0];

function encontrarGanhador(a,b){
    let pontoA = 0;
    let pontoB = 0;
    let empatou = 0;

    let len = a.length
    let i = 0

    while (i<len){
        if(a[i] > b[i]){
            pontoA += 1
        } 
        else if (a[i] < b [i]){
            pontoB += 1
        } else { empatou += 1}
        i++
    } 
    if (pontoA > pontoB){
        return `O primeiro competidor ganhou! Marcou ${pontoA} pontos`
    }
    else if (pontoA < pontoB){
        return `O segundo competidor ganhou! Marcou ${pontoB} pontos`
    } else { return `Ninguem ganhou, houve um empate com ${empatou} ponto(s) cada`}
}

console.log(encontrarGanhador(alice,bob));
