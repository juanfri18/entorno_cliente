let nombre_cliente = String(prompt("Dime tu nombre"));
let sabor_helado = String(prompt("Dime el sabor que quieres (vainilla, chocolate, fresa o menta)"));
let tamaño_helado = String(prompt("Dime el tamaño que quieres (peq, med, gra)"));
let precio_total = 0;

if (tamaño_helado == "peq") {
    precio_total = 2.5;
} else if (tamaño_helado == "med") {
    precio_total = 2.5 * 1.5;
} else if (tamaño_helado == "gra") {
    precio_total = 2.5 * 2;
} else {
    console.log("Tamaño no válido");
}

console.log(`TICKET: nombre cliente: ${nombre_cliente}, sabor: ${sabor_helado}, tamaño: ${tamaño_helado}, precio total: ${precio_total} €`);
