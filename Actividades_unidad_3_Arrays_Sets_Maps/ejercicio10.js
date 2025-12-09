const alumnos = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Pedro" },
  { id: 3, nombre: "Lucía" }
];
//.find() devuelve el primer elemento que cumpla la condición.
const alumno2 = alumnos.find(a => a.id === 2);
console.log("Alumno con ID 2:", alumno2);
//.findIndex() devuelve el índice del primer elemento que cumpla la condición.
//Si no lo encuentra, devuelve -1.
const indiceAlumno2 = alumnos.findIndex(a => a.id === 2);
console.log("Posición del alumno con ID 2:", indiceAlumno2);
/*
.findLast() → busca desde el final del array y devuelve el primer elemento que cumpla.
.findLastIndex() → devuelve el índice del primer elemento desde el final que cumpla la condición.
*/
const alumno2Ultimo = alumnos.findLast(a => a.id === 2);
const indiceAlumno2Ultimo = alumnos.findLastIndex(a => a.id === 2);

console.log("Alumno con ID 2 desde el final:", alumno2Ultimo);
console.log("Posición desde el final:", indiceAlumno2Ultimo);
