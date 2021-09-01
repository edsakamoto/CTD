/*Acessar elementos especificos de um array*/ 
let arr = ['Filipe','Eduardo','Mozarth','Elivelton','Toniolo'];
console.log(arr[0]);

/* Modificar cada um dos elementos de um array e imprimi-los no console */

arr[2] = "João"
console.log(arr);

/*Adicionar elementos a um array*/

arr.push('Camila');
console.log(arr);

/*Extrair elementos de um array*/
arr.pop();
console.log(arr);
/*Comparar elementos de um array com os elementos de outro*/

arr2 = ['Monica', 'Amanda', 'Bianca','Marcela','Natalia'];

console.log(arr === arr2);