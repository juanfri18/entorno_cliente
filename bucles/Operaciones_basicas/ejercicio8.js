let numero1 = Number(prompt('Dime los números de tu DNI y te diré la letra:'));

let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X','B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

let numero_asignacion = numero1 % 23;
let letra = letras[numero_asignacion];

console.log(`Tu DNI completo es: ${numero1}${letra}`);
