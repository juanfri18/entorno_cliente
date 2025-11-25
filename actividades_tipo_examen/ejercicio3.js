// Solicitar una frase al usuario
let frase = prompt("Escribe una frase:");

//  Contar cuántas palabras tiene
let palabras = frase.split(" "); // Divide la frase por espacios
let num_palabras = palabras.length;

//  Contar cuántas veces aparece la letra “a”
let contador_a = 0;
for (let letra of frase.toLowerCase()) { // Pasamos a minúsculas para contar tanto 'A' como 'a'
  if (letra === "a") {
    contador_a++;
  }
}

//  Mostrar la frase en mayúsculas y en minúsculas
let mayusculas = frase.toUpperCase();
let minusculas = frase.toLowerCase();

//  Detectar si contiene la palabra “javascript”
let contiene_js = frase.toLowerCase().includes("javascript");

//  Mostrar resultados
console.log(`La frase tiene ${num_palabras} palabras.`);
console.log(`La letra "a" aparece ${contador_a} veces.`);
console.log(`En mayúsculas: ${mayusculas}`);
console.log(`En minúsculas: ${minusculas}`);
console.log(`¿Contiene la palabra "javascript"? ${contiene_js ? "Sí" : "No"}`);
