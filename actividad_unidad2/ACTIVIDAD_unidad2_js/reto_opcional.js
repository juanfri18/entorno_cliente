var menu = prompt("¿Qué operación quieres realizar? (suma, resta, dividir, multiplicar)");
var num1 = Number(prompt("Número 1:"));
var num2 = Number(prompt("Número 2:"));

switch(menu){
    case "suma":
        console.log("Resultado:", num1 + num2);
        break;
    case "resta":
        console.log("Resultado:", num1 - num2);
        break;    
    case "dividir":
        console.log("Resultado:", num1 / num2);
        break;    
    case "multiplicar":
        console.log("Resultado:", num1 * num2);
        break;
    default:
        console.log("Opción no válida. Usa: suma, resta, dividir o multiplicar.");
}
