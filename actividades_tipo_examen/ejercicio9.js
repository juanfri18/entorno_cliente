let ventas = [120, 340, 560, 80, 230, 600, 400];
let total_ventas=ventas.reduce((suma,venta)=>venta + suma, 0);
console.log(`las ventas totales son ${total_ventas}`);
let promedio=total_ventas/ventas.length;
console.log(`las ventas promedio es ${promedio}`);

let mayor=ventas.reduce((max,venta)=>venta > max ? venta: max);
console.log(`las venta mmas grande es ${mayor}`);

let menor=ventas.reduce((min,venta)=>venta < min ? venta: min);
console.log(`las venta mmas pequeña es ${menor}`);

let masDe300 = ventas.filter(v => v > 300).length;
console.log(`Hay un total de ${masDe300} ventas con mas de 300`);

