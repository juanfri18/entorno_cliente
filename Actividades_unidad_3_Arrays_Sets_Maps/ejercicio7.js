const nombres = ["ana", "JUAN", "Pepe"];
const minusculas = nombres.map(n => n.toLowerCase());
console.log(minusculas);
const mayusculas = nombres.map(n => n.toUpperCase());
console.log(mayusculas);
const capitalizados = nombres.map(n =>
    //n.charAt(0) → toma la primera letra de la cadena n.
    //n.slice(1) → toma el resto de la cadena, desde el índice 1 hasta el final.
  n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()
);
console.log(capitalizados);
