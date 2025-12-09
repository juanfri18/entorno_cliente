const conjunto = new Set();

conjunto.add(10);
conjunto.add(20);
conjunto.add(10); 

console.log(conjunto.size);    
console.log(conjunto.has(20)); 

conjunto.delete(10);
console.log(conjunto); 

conjunto.clear();
console.log(conjunto); 
