
const fetchConRetardo = async (url, opciones = {}) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return fetch(url, opciones);
};

const btn = document.getElementById('btnCrear');
const resultado = document.getElementById('resultado');
const inNombre = document.getElementById('nombre');
const inEmail = document.getElementById('email');

btn.addEventListener('click', async () => {
    resultado.innerHTML = '';
    resultado.style.color = '#2c3e50';

    const datosCliente = {
        nombre: inNombre.value,
        email: inEmail.value
    };

    if (!datosCliente.nombre || !datosCliente.email) {
        alert("Por favor, rellena todos los campos");
        return;
    }

    try {
        resultado.innerHTML += '⏳ Paso 1: Creando cliente...<br>';
        
        const respCliente = await fetchConRetardo('http://localhost:3000/clientes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosCliente)
        });

        if (!respCliente.ok) throw new Error('Fallo al crear cliente');

        const clienteCreado = await respCliente.json();
        const idCliente = clienteCreado.id; 

        resultado.innerHTML += `✅ Cliente creado: ${clienteCreado.nombre} (ID: ${idCliente})<br>`;


        resultado.innerHTML += '⏳ Paso 2: Generando proyecto inicial...<br>';

        const datosProyecto = {
            nombre: "Proyecto de Bienvenida",
            estado: "Activo",
            cliente: idCliente 
        };

        const respProyecto = await fetchConRetardo('http://localhost:3000/proyectos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosProyecto)
        });

        if (!respProyecto.ok) throw new Error('Fallo al crear proyecto');

        const proyectoCreado = await respProyecto.json();

        resultado.innerHTML += `✅ Proyecto asignado correctamente.<br>`;
        resultado.innerHTML += `<span style="color: green">¡Proceso finalizado con éxito! 🎉</span>`;

    } catch (error) {
        console.error(error);
        resultado.innerHTML += `<br><span style="color: red">❌ Error: ${error.message}</span>`;
    }
});