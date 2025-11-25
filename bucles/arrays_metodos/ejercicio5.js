let objetos = [
    { nombre: "papel", precio: 20 },
    { nombre: "agua", precio: 19.99 },
    { nombre: "monster", precio: 21 },
    { nombre: "mesa", precio: 12.5 },
    { nombre: "silla", precio: 2.5 },
];

for (let obj of objetos) {
    if (obj.precio >= 20) {
        console.log("Nombre:", obj.nombre);
        console.log("Precio:", obj.precio);
    }
}
