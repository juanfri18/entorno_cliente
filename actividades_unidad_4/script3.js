
const primerPlan = document.querySelector(".plan"); 
const boton = document.querySelector("#btnSeleccionar"); 
const tituloPlan = document.querySelector("h3"); 
const resultado = document.querySelector("#resultado");


boton.addEventListener("click", function() {

    primerPlan.classList.add("seleccionado");
    tituloPlan.textContent = "Plan seleccionado";
    resultado.textContent = "Has seleccionado el plan básico";
});