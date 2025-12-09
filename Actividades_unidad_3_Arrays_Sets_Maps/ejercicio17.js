const mapa = new Map();

const numKey = 10;
const strKey = "usuario";
const objKey = { id: 1 };

// Set
mapa.set(numKey, "Número como clave");
mapa.set(strKey, "String como clave");
mapa.set(objKey, "Objeto como clave");

// Get
console.log(mapa.get(numKey));
console.log(mapa.get(strKey));
console.log(mapa.get(objKey));

// Has
console.log(mapa.has(numKey));
console.log(mapa.has("nada")); 

// Size
console.log(mapa.size);

// Delete
mapa.delete(strKey);
console.log(mapa.size); 

// Clear
mapa.clear();
console.log(mapa); 
