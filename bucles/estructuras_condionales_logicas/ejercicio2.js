let numero1 = Number(prompt('Dime los creditos que tienes'));

switch (true) {
  case (numero1 < 100):
    console.log("Solo puedes acceder a las salas 1 y 2 empleado");
    break;
  case (numero1 < 200):
    console.log("Solo puedes acceder a las salas 1,2 y 3 eres oficial");
    break;
  case (numero1 >200):
    console.log("Solo puedes acceder a todas las salas eres el jefe");
    break;
  default:
    console.log("numero no valido");
    break;
}
