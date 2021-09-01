let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la via es bella"]

function converterMaiusculas(array){
    let len = array.length
    let i = 0
    while(i < len){
        array[i] = array[i].toUpperCase()
        i++
    }
    return array
}

/*console.log(converterMaiusculas(peliculas))*/
const t = ['a','b','c','d']
const e = ['e','f','g','h']
function passagemDeElementos(arr1, arr2){
    let i = 0
    let len = arr2.length
    while(i < len){
        arr1.push(arr2.pop().toUpperCase())
        i++
    }
    return arr1
}
/*console.log(passagemDeElementos(t,e))*/

function copiarArray(arr1){
    let arr2=[]
    let i = 0
    let len = arr1.length
    while(i < len){
        arr2.push(arr1[i].toUpperCase())
        i++
    }
    return arr2
}

const aisaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 9, 10, 6, 6, 8, 3];

function compararScores(asia, europa){
    let comparacoes = []    
    let i = 0
    let len = asia.length
    while (i < len){
        comparacoes[i] = asia[i] === europa[i];
        i++
    }
    return comparacoes

}

/*console.log(compararScores(aisaScores,euroScores));*/

