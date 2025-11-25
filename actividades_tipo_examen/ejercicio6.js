let fecha_nac = new Date("2003-12-18");

let fecha_actual = new Date();
let fecha_actual_str =
  fecha_actual.getDate() + "-" +
  (fecha_actual.getMonth() + 1) + "-" +
  fecha_actual.getFullYear();

//Edad actual del usuario
let edad=fecha_actual.getFullYear()- fecha_nac.getFullYear();
let mes = fecha_actual.getMonth() - fecha_nac.getMonth();

  // Si aún no cumplió años este año:
  if (mes < 0 || (mes === 0 && fecha_actual.getDate() < fecha_nac.getDate())) {
    edad--;
  }
console.log(edad);


// cuantos dias queda para el proximo cumpleaños

let proximoCumple = new Date(
  fecha_actual.getFullYear(),
  fecha_nac.getMonth(),
  fecha_nac.getDate()
);

// Si el cumpleaños de este año ya pasó, usar el año siguiente
if (proximoCumple < fecha_actual) {
  proximoCumple.setFullYear(proximoCumple.getFullYear() + 1);
}

// Diferencia en milisegundos
let diffMs = proximoCumple - fecha_actual;

// Convertimos a días
let dias = diffMs / (1000 * 60 * 60 * 24);
console.log("Días para el próximo cumpleaños:", dias);
// coprobuebo si ha nacio en año bisiesto
function esBisiesto(year) {
   let bisiesto=(year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
   if(bisiesto){
        return"Si";
   }else{
        return"No";
   }
   
}

let year = fecha_nac.getFullYear();

console.log("¿Nació en un año bisiesto?", esBisiesto(year));
