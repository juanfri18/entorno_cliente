const mapa = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3]
]);

const pares = [...mapa];
const claves = [...mapa.keys()];
const valores = [...mapa.values()];

console.log(pares);  
console.log(claves);  
console.log(valores); 
