const set = new Set(["A", "B", "C"]);
const array1 = [...set];
console.log(array1); // ["A", "B", "C"]

const array2 = [...set];

//structuredClone() crea una copia profunda (deep clone).
const copia = structuredClone(array2);

// Modificamos la copia
copia[0] = "Z";

console.log(array2); 
console.log(copia); 
