let tareas = [
  { id: 1, texto: "Aprender JS", completada: false },
  { id: 2, texto: "Hacer ejercicio", completada: true },
  { id: 3, texto: "Leer un libro", completada: false }
];

function listarTareas() {
  console.log("Tareas:");
  tareas.forEach(t => {
    console.log(`${t.id}. [${t.completada ? "X" : " "}] ${t.texto}`);
  });
}

function agregarTarea(texto) {
  const nuevaTarea = {
    id: tareas.length > 0 ? tareas[tareas.length - 1].id + 1 : 1,
    texto: texto,
    completada: false
  };
  tareas.push(nuevaTarea);
  console.log(`Tarea "${texto}" añadida.`);
}

function buscarTarea(textoBuscado) {
  const resultados = tareas.filter(t =>
    t.texto.toLowerCase().includes(textoBuscado.toLowerCase())
  );
  console.log(`Resultados de búsqueda para "${textoBuscado}":`, resultados);
  return resultados;
}

function completarTarea(id) {
  const tarea = tareas.find(t => t.id === id);
  if (tarea) {
    tarea.completada = true;
    console.log(`Tarea "${tarea.texto}" marcada como completada.`);
  } else {
    console.log(`No se encontró tarea con ID ${id}.`);
  }
}

function filtrarTareas(completada = true) {
  const resultado = tareas.filter(t => t.completada === completada);
  console.log(completada ? "Tareas completadas:" : "Tareas pendientes:", resultado);
  return resultado;
}

function verificarTareas() {
  const todasCompletadas = tareas.every(t => t.completada);
  const algunaCompletada = tareas.some(t => t.completada);

  console.log("¿Todas las tareas completadas?", todasCompletadas);
  console.log("¿Alguna tarea completada?", algunaCompletada);
}

function mostrarTextos() {
  const textos = tareas.map(t => t.texto);
  console.log("Textos de todas las tareas:", textos);
}

listarTareas();
agregarTarea("Comprar leche");
listarTareas();
buscarTarea("leer");
completarTarea(3);
filtrarTareas(false); 
filtrarTareas(true);  
verificarTareas();
mostrarTextos();
