const fetchConRetardo = async (url, opciones = {}) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return fetch(url, opciones);
};

const lista = document.getElementById('listaProyectos');

async function cargarProyectos() {
    try {
        console.log("Cargando proyectos...");
        
        const respuesta = await fetchConRetardo('http://localhost:3000/proyectos');

        if (!respuesta.ok) {
            throw new Error('Error al cargar: ' + respuesta.status);
        }

        const datos = await respuesta.json(); 
        datos.forEach(proyecto => {
            const li = document.createElement('li');
            li.textContent = `${proyecto.nombre} (${proyecto.cliente}) - Estado: ${proyecto.estado}`;
            if (proyecto.estado === "Activo") {
                li.style.borderLeft = "5px solid green";
            } else if (proyecto.estado === "En desarrollo") {
                li.style.borderLeft = "5px solid orange";
            }
            
            lista.appendChild(li);
        });

        console.log("Proyectos cargados.");

    } catch (error) {
        console.error("¡Vaya!", error);
        lista.innerHTML = `<li style="color:red">Error: ${error.message}</li>`;
    }
}

cargarProyectos();