//1
const descripcion=document.getElementById("descripcion");
const mostrar=document.getElementById("btnMostrar");
const ocultar=document.getElementById("btnOcultar");

mostrar.addEventListener("click", function() {
    descripcion.style.display = "block";
    mostrar.textContent = "Descripción visible";
});
ocultar.addEventListener("click", function() {
    descripcion.style.display = "none";
    ocultar.textContent = "Descripción oculta";
});





const titulo=document.getElementById("titulo");
const precio=document.getElementById("precio");