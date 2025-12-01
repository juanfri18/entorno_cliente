// Añade un 0 a la izquierda cuando hay un solo dígito
function dosDigitos(n) {
    return String(n).padStart(2, '0');
}

function actualizarReloj() {
    const ahora = new Date();
    const hh = dosDigitos(ahora.getHours());
    const mm = dosDigitos(ahora.getMinutes());
    const ss = dosDigitos(ahora.getSeconds());

    document.getElementById("reloj").textContent = `${hh}:${mm}:${ss}`;
}

// Actualiza cada segundo
setInterval(actualizarReloj, 1000);
