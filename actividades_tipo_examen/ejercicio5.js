// Inventario como array de objetos
let inventario = [
    { nombre: "platanos", precio: 1, stock: 6 },
    { nombre: "manzanas", precio: 2, stock: 9 },
    { nombre: "peras", precio: 1.5, stock: 13 },
    { nombre: "luarel", precio: 5, stock: 2 }
];

let volver_usar = true;

while (volver_usar) {
    console.log("1. Ver todos los productos.");
    console.log("2. Buscar un producto por nombre.");
    console.log("3. Mostrar el total del valor del stock.");
    console.log("4. Añadir un nuevo producto.");
    console.log("5. Salir");

    let eleccion = prompt("Elige 1, 2, 3, 4 o 5");

    switch (eleccion) {
        case "1":
            console.log("Este es el inventario:");
            inventario.forEach(prod => {
                console.log(`Nombre: ${prod.nombre}, Precio: ${prod.precio}, Stock: ${prod.stock}`);
            });
            break;

        case "2":
            let buscar = prompt("Escribe el nombre del producto a buscar:").toLowerCase();
            let producto = inventario.find(p => p.nombre.toLowerCase() === buscar);
            if (producto) {
                console.log(`Producto encontrado: Nombre: ${producto.nombre}, Precio: ${producto.precio}, Stock: ${producto.stock}`);
            } else {
                console.log("Producto no encontrado.");
            }
            break;

        case "3":
            let totalValor = inventario.reduce((total, prod) => total + (prod.precio * prod.stock), 0);
            console.log(`El valor total del stock es: ${totalValor}`);
            break;

        case "4":
            let nombreNuevo = prompt("Nombre del nuevo producto:");
            let precioNuevo = parseFloat(prompt("Precio del nuevo producto:"));
            let stockNuevo = parseInt(prompt("Stock del nuevo producto:"));
            inventario.push({ nombre: nombreNuevo, precio: precioNuevo, stock: stockNuevo });
            console.log("Producto añadido correctamente.");
            break;

        case "5":
            console.log("Saliendo de la aplicación");
            volver_usar = false;
            break;

        default:
            console.log("Opción incorrecta, debes escribir un número del 1 al 5.");
            break;
    }

    if (volver_usar) {
        let salir_fuera_bucle = prompt("¿Quieres salir de la aplicación? ('s' para sí, cualquier otra para continuar)").toLowerCase();
        if (salir_fuera_bucle === "s") {
            volver_usar = false;
        }
    }
}
