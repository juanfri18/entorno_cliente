const numeros = [10, 1, 20, 3, 2];
let mal_ordenados=numeros.sort();
console.log(mal_ordenados);
let bien_ordenados=numeros.sort((a,b)=>a-b);
console.log(bien_ordenados);
let sin_modificar=numeros.toSorted((a,b)=>a-b);
console.log(sin_modificar);