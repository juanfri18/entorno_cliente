// Pedimos el radio al usuario
let radio = Number(prompt("Introduce el radio de la circunferencia:"));

// Calculamos el área
let area = Math.PI * radio * radio; // o Math.PI * Math.pow(radio, 2)

// Calculamos la longitud
let longitud = 2 * Math.PI * radio;

// Mostramos los resultados
console.log(`El área es: ${area.toFixed(2)}`);
console.log(`La longitud es: ${longitud.toFixed(2)}`);
