document.getElementById("btn").addEventListener("click", () => {

    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = ""; // limpiar antes de empezar

    setTimeout(() => {
        mensaje.textContent = "Preparados...";
    }, 2000);

    setTimeout(() => {
        mensaje.textContent = "Listos...";
    }, 4000);

    setTimeout(() => {
        mensaje.textContent = "¡YA!";
    }, 6000);
});
