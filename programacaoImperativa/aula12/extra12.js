function digitalHouse(n1,n2){
    let arr= []
    for(let i = 0; i <= 100 ; i++){
        if(i % n1 == 0 & i % n2 == 0){
            arr.push('DigitalHouse');
        } else if (i % n1 == 0){
            arr.push('Digital')
        } else if (i % n2 == 0){
            arr.push('House')
        } else {arr.push(i)}        
    } return arr   
}

/*console.log(digitalHouse(3,7));*/


function somaArray(array){
    /*let len = array.length*/
    let arr2 = ''
    for(let i = 0; i<array.length; i++){
        arr2 = arr2 + array[i]
    }
    return arr2;
}

console.log(somaArray(['t','c','h','a','u']));
