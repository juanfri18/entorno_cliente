const inventario = [
  { id: 1, nombre: "Teclado", categoria: "Periféricos", precio: 25 },
  { id: 2, nombre: "Ratón", categoria: "Periféricos", precio: 15 },
  { id: 3, nombre: "Monitor", categoria: "Pantallas", precio: 150 },
  { id: 4, nombre: "Portátil", categoria: "Computadoras", precio: 600 }
];
const categorias = new Set(inventario.map(p => p.categoria));
console.log(categorias);
const mapaCategorias = new Map();
categorias.forEach(cat => {
  mapaCategorias.set(cat, inventario.filter(p => p.categoria === cat));
});

console.log(mapaCategorias);
// filter por precio > 100
const caros = inventario.filter(p => p.precio > 100);

// sort por nombre (modifica original)
inventario.sort((a, b) => a.nombre.localeCompare(b.nombre));

// toSorted por nombre (no modifica original)
const ordenado = inventario.toSorted((a,b) => a.nombre.localeCompare(b.nombre));

console.log(caros, inventario, ordenado);
const buscado = inventario.find(p => p.nombre.includes("Ratón"));
console.log(buscado);
