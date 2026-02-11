const fetchConRetardo = async (url, opciones = {}) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return fetch(url, opciones);
};
const btnCrear = document.getElementById('btnCrear');
const inputTitulo = document.getElementById('titulo');
const inputDescripcion = document.getElementById('descripcion');
const selectPrioridad = document.getElementById('prioridad');

btnCrear.addEventListener('click', () => {
  
  const nuevaIncidencia = {
    titulo: inputTitulo.value,
    descripcion: inputDescripcion.value,
    prioridad: selectPrioridad.value,
    fecha: new Date().toISOString().split('T')[0] 
  };

  const opciones = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(nuevaIncidencia)
  };

  fetchConRetardo('http://localhost:3000/incidencias', opciones)
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo crear la incidencia');
      }
      return response.json();
    })
    .then(data => {
      console.log('Incidencia creada con éxito:', data);
      alert('Incidencia registrada (mira la consola)');
    })
    .catch(error => {
      console.error('Error:', error);
    });
});