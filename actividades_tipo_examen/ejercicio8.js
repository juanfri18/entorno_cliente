let edad;

while (true) {
    edad = Number(prompt("Introduce tu edad (0 para salir):"));
    
    if (edad === 0) {
        console.log("Saliendo del programa...");
        break;
    }

    if (edad < 13) {
        console.log("Solo puedes ver dibujos.");
    } else if (edad >= 13 && edad <= 17) {
        console.log("Puedes ver películas juveniles.");
    } else if (edad >= 18 && edad <= 65) {
        console.log("Puedes ver todo tipo de contenido.");
    } else if (edad > 65) {
        console.log("Películas recomendadas para mayores.");
    } else {
        console.log("Edad inválida.");
    }
}
