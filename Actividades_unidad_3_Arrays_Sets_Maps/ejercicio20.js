const productos = new Map();

// Insertar
productos.set(101, { nombre: "Teclado", precio: 25 });
productos.set(102, { nombre: "Ratón", precio: 15 });
productos.set(103, { nombre: "Monitor", precio: 150 });

// Buscar por ID
console.log(productos.get(101));

// Comprobar existencia
console.log(productos.has(102));

// Listar claves
console.log([...productos.keys()]);

// Listar valores
console.log([...productos.values()]);
