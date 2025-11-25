// Crear fechas con diferentes métodos
const d1 = new Date("2025-03-25");
const d2 = new Date(2018, 11, 24, 10, 33, 30, 0); // Mes 11 = diciembre (0-based)
let ahora = Date.now();

// Mostrar información de la primera fecha
console.log("Fecha 1:", d1);
console.log("Día de la semana:", d1.getDay()); // 0 = domingo, 1 = lunes, etc.
console.log("Día:", d1.getDate());
console.log("Mes:", d1.getMonth()); // enero = 0
console.log("Año:", d1.getFullYear());
console.log("Segundos:", d1.getSeconds());
console.log("Milisegundos:", d1.getMilliseconds());
console.log("Tiempo desde 1/1/1970:", d1.getTime());

// Crear otra fecha y modificarla
const date = new Date("2018/01/30 15:30:10.999");
date.setDate(15);        // 15/01/2018
date.setMonth(1);        // febrero (mes 1)
date.setFullYear(2025);  // año 2025
console.log("Fecha modificada:", date);

// Crear desde string usando parse (en formato ISO)
let msec = Date.parse("2025-03-07");
const d3 = new Date(msec);
console.log("Desde parse:", d3, d3.toDateString(), d3.toLocaleDateString());

// Ver tiempo actual en milisegundos
console.log("Ahora (ms desde 1970):", ahora);
