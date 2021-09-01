/*
 melhor media (a maior pontuacao media entre os concorrentes) 
 maior e-tip (a maior pontuacao entre as 5 notas de cada participante)
*/
/*
1.Determine qual seria a maneira ideal de representar cada participante com suas pontuações.
*/

const partA = [5,8,4,9,5]
const partB = [8,7,8,6,8]
const partC = [7,5,10,8,3]

/*
2.Crie uma função pontuacaoMedia à qual receba um participante por parâmetro e deve calcular e devolver a pontuação média dele.
*/
function pontuacaoMedia(participante){
    let soma = 0
    let i = 0
    let len = participante.length
    while (i < len){
        soma += participante[i]
        i++
    }
    return soma / i
}
/*console.log(pontuacaoMedia(partA))*/
/*
3.Crie uma função pontuacaoMaior que receba um participante por parâmetro e deve calcular e devolver a pontuação mais alta que o participante tem
*/

function pontuacaoMaior(num){
    return Math.max.apply(null, num);
}
/*console.log(pontuacaoMaior(partB))*/

/*4.Logo nosso líder tecnológico nos pede para criar essas duas funções geramos uma nova funcionalidade chamada competição que receberá os 3 participantes por parâmetros, e executará as duas funções criadas anteriormente para calcular as médias e pontuações mais altas de cada uma, e deve anunciar (mostrar pelo console) o vencedor de cada modalidade de pontuação.
*/
function competicao(player1, player2, player3){
    let medias = [0, 0, 0] 
    let etip = [0, 0, 0] 
    let competitors = [player1, player2, player3]
    let len = competitors.length
    i = 0
    let ganhadorMedia = ''
    let ganhadorETip = ''
    while(i < len){
       medias[i] = pontuacaoMedia(competitors[i]);
       etip[i] = pontuacaoMaior(competitors[i]);
       i++
    }
    if(medias[0] > medias[1] && medias[0] > medias[2]){
        ganhadorMedia = 'O participante 1 possui a maior média entre os 3\n'
    } if (medias[1] > medias[0] && medias[1] > medias[2]) {
        ganhadorMedia = 'O participante 2 possui a maior média entre os 3\n'
    } else { ganhadorMedia = 'O participante 3 possui a maior média entre os 3\n'}
    
    if(etip[0] > etip[1] && etip[0] > etip[2]){
        ganhadorETip = 'O participante 1 possui o maior E Tip entre os 3\n'
    } if (etip[1] > etip[0] && etip[1] > etip[2]) {
        ganhadorETip = 'O participante 2 possui o maior E Tip entre os 3\n'
    } else { ganhadorETip = 'O participante 3 possui o maior E Tip entre os 3\n'}
    
    return ganhadorMedia + '\n' + ganhadorETip
}

console.log(competicao(partA,partB,partC));