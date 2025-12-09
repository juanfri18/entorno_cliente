/*
.filter() recorre el array y aplica una función que devuelve true o false.
Solo los elementos que devuelvan true se incluyen en el nuevo array.
El array original no se modifica.
*/

const mayores = edades.filter(e => e >= 18);
console.log("Mayores de edad:", mayores);
const entre18y30 = edades.filter(e => e >= 18 && e <= 30);
console.log("Entre 18 y 30:", entre18y30);
const pares = edades.filter(e => e % 2 === 0);
console.log("Edades pares:", pares);
