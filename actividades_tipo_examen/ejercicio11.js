document.getElementById("calcular").addEventListener("click", function () {

  let paginas = Number(document.getElementById("paginas").value);
  let seo = document.getElementById("seo").checked;
  let mantenimiento = document.getElementById("mantenimiento").checked;

  let total = 500; // página base

  // +50€ por cada página adicional
  total += paginas * 50;

  if (seo) total += 300;
  if (mantenimiento) total += 200;

  let resultado = document.getElementById("resultado");
  resultado.textContent = "Total: " + total + " €";

  // Cambiar color
  if (total > 1000) {
    resultado.className = "rojo";
  } else {
    resultado.className = "verde";
  }
});
