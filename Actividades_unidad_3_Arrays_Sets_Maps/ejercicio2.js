const palabras = ["Zorro", "árbol", "manzana", "Casa", "fuego", "Barco"];
let ordenadas_sin_criterio=palabras.sort();
console.log(ordenadas_sin_criterio)
const palabras2 = ["Zorro", "árbol", "manzana", "Casa", "fuego", "Barco"];
// le pongo un criterio a sort , en el cual uso la funcion toLowerCase que convierte el string en minusculas y luego lo comparo con
//una funcion la cual tiene en cuenta el idioma y nos ayuda con las letras acentuadas.
const ordenIgnorandoMayus = palabras2.sort((a, b) =>
    //localecomapre(variable_a_comparar,"idioma")
  a.toLowerCase().localeCompare(b.toLowerCase(), "es")
);

console.log("Orden ignorando mayúsculas:", ordenIgnorandoMayus);
