// Lista de imágenes
const imagenes = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg"
];

let indice = 0;
const banner = document.getElementById("banner");

// Función para cambiar imagen
function cambiarImagen() {
    // Avanza y vuelve al inicio
    indice = (indice + 1) % imagenes.length;  
    banner.src = imagenes[indice];
}

// Intervalo automático
let intervalo = setInterval(cambiarImagen, 2000);

// Botón PAUSAR
document.getElementById("pausarBtn").addEventListener("click", () => {
    clearInterval(intervalo);
});
