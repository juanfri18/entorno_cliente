// 1. Crear un array con los nombres de 5 ciudades
let  ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao"];

// 2. Invertir su orden con .reverse() (modifica el array original)
ciudades.reverse();
console.log("Array invertido con reverse():", ciudades);

// 3. Generar un segundo array invertido sin modificar el original usando .toReversed()
let ciudadesOriginal = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao"];
let ciudadesInvertidas = ciudadesOriginal.toReversed();

console.log("Array original:", ciudadesOriginal);
console.log("Array invertido con toReversed():", ciudadesInvertidas);
