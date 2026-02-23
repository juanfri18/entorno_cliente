// Ejercicio 1: URL base del servidor
const URL_API = 'http://localhost:3000/alumnos';

const listaAlumnos = document.getElementById('lista-alumnos');
const mensajeDiv = document.getElementById('mensaje');
const formulario = document.getElementById('formulario');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const cursoInput = document.getElementById('curso');
const idInput = document.getElementById('id-alumno');

function mostrarMensaje(texto, tipo) {
    mensajeDiv.textContent = texto;
    mensajeDiv.className = tipo; 
    setTimeout(() => { mensajeDiv.textContent = ''; mensajeDiv.className = ''; }, 3000);
}

//  EJERCICIO 1 y 2
/* --- CÓDIGO DEL EJERCICIO 1.2 (Petición con Promesas) ---
   axios.get(URL_API)
       .then(response => {
           console.log('Objeto response:', response);
           console.log('Datos:', response.data);
       })
       .catch(error => console.error('Error:', error));
*/
async function obtenerAlumnos() {
    mensajeDiv.textContent = "Cargando alumnos..."; 
    
    try {
        const response = await axios.get(URL_API);
        
        console.log('Objeto response completo:', response);
        console.log('Datos (data):', response.data);
        if(response.data.length > 0) {
            console.log('Nombre del primer alumno:', response.data[0].nombre);
        }

        listaAlumnos.innerHTML = '';

        response.data.forEach(alumno => {
            mostrarAlumnoEnDOM(alumno);
        });
        
        mensajeDiv.textContent = ""; 

    } catch (error) {
        console.error("Error al obtener alumnos:", error);
        mostrarMensaje(`Error: ${error.message}`, 'error'); 
    }
}

function mostrarAlumnoEnDOM(alumno) {
    const li = document.createElement('li');
    li.innerHTML = `
        <strong>${alumno.nombre}</strong> - ${alumno.email} (${alumno.curso})
        <button onclick="cargarDatosEdicion('${alumno.id}')">Editar</button>
        <button onclick="eliminarAlumno('${alumno.id}')">Eliminar</button>
    `;
    listaAlumnos.appendChild(li);
}

//EJERCICIO 3 y 4
formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nuevoAlumno = {
        nombre: nombreInput.value,
        email: emailInput.value,
        curso: cursoInput.value
    };

    const id = idInput.value; 

    try {
        if (id) {
            // EJERCICIO 4
            await axios.put(`${URL_API}/${id}`, nuevoAlumno);
            mostrarMensaje('Alumno actualizado correctamente', 'success');
        } else {
            //EJERCICIO 3
            await axios.post(URL_API, nuevoAlumno);
            mostrarMensaje('Alumno creado correctamente', 'success');
        }

        formulario.reset();
        idInput.value = ''; 
        obtenerAlumnos(); 

    } catch (error) {
        console.error(error);
        mostrarMensaje('Error al guardar el alumno', 'error');
    }
});

// EJERCICIO 4
window.cargarDatosEdicion = async (id) => {
    try {
        const response = await axios.get(`${URL_API}/${id}`);
        const alumno = response.data;
        
        idInput.value = alumno.id;
        nombreInput.value = alumno.nombre;
        emailInput.value = alumno.email;
        cursoInput.value = alumno.curso;
        
        mostrarMensaje('Editando alumno: ' + alumno.nombre, 'success');
    } catch (error) {
        mostrarMensaje('Error al cargar datos del alumno', 'error');
    }
};

// EJERCICIO 5
window.eliminarAlumno = async (id) => {
    // Confirmación
    if (confirm('¿Seguro que quieres eliminar este alumno?')) {
        try {
            // Petición DELETE
            const response = await axios.delete(`${URL_API}/${id}`);
            console.log('Status Code:', response.status); 
            
            mostrarMensaje('Alumno eliminado', 'success');
            obtenerAlumnos(); 
        } catch (error) {
            mostrarMensaje('Error al eliminar', 'error');
        }
    }
};

document.addEventListener('DOMContentLoaded', obtenerAlumnos);