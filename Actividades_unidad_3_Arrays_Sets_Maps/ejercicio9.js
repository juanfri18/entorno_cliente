/*
.every() devuelve true si todos los elementos cumplen la condición.
Aquí comprobamos n >= 5. */
const todosAprobados = notas.every(n => n >= 5);
console.log("Todos aprobaron:", todosAprobados);
/*
.some() devuelve true si al menos un elemento cumple la condición.
Comprobamos n >= 9. */
const algunSobresaliente = notas.some(n => n >= 9);
console.log("Algún sobresaliente:", algunSobresaliente);

const algunaNotaBaja = notas.some(n => n < 3);
console.log("Alguna nota menor de 3:", algunaNotaBaja);
