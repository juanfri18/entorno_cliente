let temporizador; // guardará el ID del setInterval
let colorActual = "negro"; // estado inicial

function crono() {
    const texto = document.getElementById("texto");

    // Cambiar de color según el estado
    if (colorActual === "negro") {
        texto.style.color = "red";
        colorActual = "rojo";
    } else {
        texto.style.color = "black";
        colorActual = "negro";
    }
}

// Inicia el cambio de color cada 500 ms
temporizador = setInterval(crono, 500);