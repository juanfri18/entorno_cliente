let numero1 = Number(prompt('Dime tu nota del 0-10 y te diré cuál es tu calificación'));

switch (true) {
  case (numero1 < 5):
    console.log("Suspenso");
    break;
  case (numero1 < 6.99):
    console.log("Aprobado");
    break;
  case (7<numero1 < 8.99):
    console.log("Notable");
    break;
  case (numero1 >= 9):
    console.log("Sobresaliente");
    break;
  default:
    console.log("Nota no válida");
    break;
}
