const productos = [
{ nombre: "Teclado", precio: 25 },
{ nombre: "Monitor", precio: 180 },
{ nombre: "Ratón", precio: 15 }
];
//ordenados con sort hay conflicto
/*
let ordenados_precio=productos.sort((a,b)=>b.precio-a.precio);
console.log(ordenados_precio);
let ordenados_nombre=productos.sort((a,b)=>
a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase(),"es")
);
console.log(ordenados_nombre);
*/
let ordenados_precio=productos.toSorted((a,b)=>b.precio-a.precio);
console.log(ordenados_precio);
let ordenados_nombre=productos.toSorted((a,b)=>
a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase(),"es")
);
console.log(ordenados_nombre);