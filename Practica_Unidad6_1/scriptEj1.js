const fetchConRetardo = async (url, opciones = {}) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return fetch(url, opciones);
};

const lista = document.getElementById('listaEmpleados');

console.log("Solicitando empleados...");

fetchConRetardo('http://localhost:3000/empleados')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error de red: ' + response.status);
        }
        return response.json();
    })
    .then(empleados => {
        empleados.forEach(empleado => {
            const item = document.createElement('li');
            item.textContent = `${empleado.nombre} - ${empleado.puesto} (${empleado.departamento})`;
            lista.appendChild(item);
        });
        console.log("Empleados cargados correctamente.");
    })
    .catch(error => {
        console.error('¡Hubo un problema con la petición!', error);
        
        const errorItem = document.createElement('li');
        errorItem.textContent = "Error al cargar los datos. Revisa que el servidor esté encendido.";
        errorItem.style.color = "red";
        lista.appendChild(errorItem);
    });