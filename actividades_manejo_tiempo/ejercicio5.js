let temporizador;

document.getElementById("parar").addEventListener("click", function() {
    clearInterval(temporizador);
});

document.getElementById("boton").addEventListener("click", function() {

    const mostrar = document.getElementById("mostrar");

    // Reinicia el texto cada vez que pulses el botón
    mostrar.textContent = "Cargando";

    temporizador = setInterval(() => {
        mostrar.textContent += ".";
    }, 500);
});
