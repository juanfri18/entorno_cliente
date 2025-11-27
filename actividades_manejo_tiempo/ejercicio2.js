let temporizador;   // guardará el ID del timeout

document.getElementById("iniciar").addEventListener("click", function() {
    temporizador = setTimeout(() => {
        alert("Han pasado 3 segundos");
    }, 3000);
});
document.getElementById("cancelar").addEventListener("click", function() {
    clearTimeout(temporizador);
});
