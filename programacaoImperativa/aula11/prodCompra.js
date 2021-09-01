let listaCompra = ['Café', 'Suco', 'Cerveja', 'Carne'];

listaCompra.push('Alface');

console.log('Método push(), adiciona um elemento ao final da lista');
console.log(listaCompra);


let ultimoLista = listaCompra.pop() //não recebe parâmetro
console.log('Método pop(), elimina o último elemento');
console.log(listaCompra);
console.log(ultimoLista);

let primeiroLista = listaCompra.shift()
console.log('Método shift(), elimina o primeiro elemento da lista');
console.log(listaCompra);
console.log(primeiroLista);

listaCompra.unshift(primeiroLista);
console.log('Método unshift(),adiciona o elemento no inicio da lista');
console.log(listaCompra);

let separadosPorPipe = listaCompra.join(' | ');
console.log('Método join(), junta os elementos de um array usando um separador especificado, por default ele separa por virgula');
console.log(separadosPorPipe);