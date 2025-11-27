let temporizador;

document.getElementById("enviar").addEventListener("click", function() {
    // Evitar múltiples temporizadores
    clearInterval(temporizador);

    let numero_seg = parseInt(document.getElementById("numero_seg").value);

    if (isNaN(numero_seg) || numero_seg <= 0) {
        alert("Introduce un número válido");
        return;
    }
    //enlaza el id que tiene en el html ocn una varaible en js  
    const mostrar = document.getElementById("mostrar");
    //ambia el valor del texto que esta en el html  por el que le decimos
    mostrar.textContent = numero_seg;

    temporizador = setInterval(() => {
        numero_seg--;
        mostrar.textContent = numero_seg;

        if (numero_seg <= 0) {
            clearInterval(temporizador);
            alert("BOOOOOMMMM!!!!!!");
        }
    }, 1000);
});
