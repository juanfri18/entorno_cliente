const alumnos = [
  { alumno: "Ana", notas: [7, 8, 6] },
  { alumno: "Luis", notas: [4, 5, 3] },
  { alumno: "Marta", notas: [9, 10, 8] }
];
const medias = alumnos.map(a => ({
  alumno: a.alumno,
  media: a.notas.reduce((sum, n) => sum + n, 0) / a.notas.length
}));

console.log(medias);
const aprobados = medias.filter(a => a.media >= 5);
console.log(aprobados);
const haySuspensoGrave = alumnos.some(a => a.notas.some(n => n < 3));
console.log(haySuspensoGrave);
const todosAprobados = medias.every(a => a.media >= 5);
console.log(todosAprobados);