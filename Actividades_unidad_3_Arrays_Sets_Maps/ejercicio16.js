const set = new Set([5, "A", [1, 2, 3]]);

// Copia superficial
const copia1 = [...set];

// Copia profunda
const copia2 = [...structuredClone(set)];

copia1[2][0] = 999;   
copia2[2][0] = 777;   

console.log([...set]);  
console.log(copia1);   
console.log(copia2);    
