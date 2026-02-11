const fetchConRetardo = async (url, opciones = {}) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return fetch(url, opciones);
};

const lista = document.getElementById('listaEmpleados');
const inputFiltro = document.getElementById('filtro');
let todosLosEmpleados = []; 
function mostrarEmpleados(arrayDatos) {
    lista.innerHTML = '';
    if (arrayDatos.length === 0) {
        lista.innerHTML = '<li>No se han encontrado empleados con ese filtro.</li>';
        return;
    }

    arrayDatos.forEach(empleado => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${empleado.nombre}</strong> - ${empleado.puesto} (${empleado.departamento})`;
        lista.appendChild(li);
    });
}

async function cargarDatos() {
    try {
        const respuesta = await fetchConRetardo('http://localhost:3000/empleados');
        
        if (!respuesta.ok) {
            throw new Error('Error al cargar empleados');
        }

        todosLosEmpleados = await respuesta.json();
        
        mostrarEmpleados(todosLosEmpleados);
        console.log("Datos cargados correctamente:", todosLosEmpleados);

    } catch (error) {
        console.error(error);
        lista.innerHTML = '<li style="color: red">Error al cargar los datos del servidor.</li>';
    }
}

inputFiltro.addEventListener('input', (evento) => {
    const textoUsuario = evento.target.value.toLowerCase();
    
    const empleadosFiltrados = todosLosEmpleados.filter(empleado => {
        return empleado.departamento.toLowerCase().includes(textoUsuario);
    });

    mostrarEmpleados(empleadosFiltrados);
});

cargarDatos();