const estudiantes = [
  { id: 1, nombre: "Ana Pérez" },
  { id: 2, nombre: "Luis Gómez" },
  { id: 3, nombre: "Marta Pérez" },
  { id: 4, nombre: "Ana Pérez" } // duplicado
];
const nombresUnicos = [...new Set(estudiantes.map(e => e.nombre))];
console.log(nombresUnicos);
const ordenados = [...estudiantes].sort((a,b) => {
  const apellidoA = a.nombre.split(" ").pop();
  const apellidoB = b.nombre.split(" ").pop();
  return apellidoA.localeCompare(apellidoB);
});
console.log(ordenados);
const mapaEstudiantes = new Map(estudiantes.map(e => [e.id, e]));
console.log(mapaEstudiantes);
console.log(mapaEstudiantes.get(2));
const busqueda = estudiantes.filter(e => e.nombre.includes("Ana"));
console.log(busqueda);
const iniciales = new Set(estudiantes.map(e => e.nombre[0]));
console.log(iniciales);
