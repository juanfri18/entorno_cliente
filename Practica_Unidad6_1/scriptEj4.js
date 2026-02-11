const fetchConRetardo = async (url, opciones = {}) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return fetch(url, opciones);
};

const btnAlta = document.getElementById('btnAlta');
const inNombre = document.getElementById('nombre');
const inEmail = document.getElementById('email');
const inEmpresa = document.getElementById('empresa');

btnAlta.addEventListener('click', async () => {
    
    const nuevoCliente = {
        nombre: inNombre.value,
        email: inEmail.value,
        empresa: inEmpresa.value
    };

    try {
        console.log("Enviando cliente al servidor...");
        
        const respuesta = await fetchConRetardo('http://localhost:3000/clientes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevoCliente)
        });

        if (!respuesta.ok) throw new Error('Error al guardar: ' + respuesta.status);

        const clienteGuardado = await respuesta.json();
        
        console.log("¡Cliente creado!", clienteGuardado);
        alert(`Cliente ${clienteGuardado.nombre} registrado con éxito.`);

        inNombre.value = '';
        inEmail.value = '';
        inEmpresa.value = '';

    } catch (error) {
        console.error("Error en el alta:", error);
        alert("Hubo un error al guardar el cliente.");
    }
});