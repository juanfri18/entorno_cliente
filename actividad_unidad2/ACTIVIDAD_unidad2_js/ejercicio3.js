// Pedir la edad al usuario
let edad = prompt("Introduce tu edad:");

// Convertir la entrada a número
edad = Number(edad);

// Determinar si es mayor de edad
let esMayor = edad > 18;

// Crear el mensaje adecuado
let mensaje = esMayor ? "Eres mayor de edad." : "Eres menor de edad.";

// Mostrar el mensaje en la página
document.body.innerHTML = mensaje;

// Mostrar el mensaje también en la consola
console.log(mensaje);
