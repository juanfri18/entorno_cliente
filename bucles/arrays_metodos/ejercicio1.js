let lista_compra=["huevos","manzana","pan","carne"];
console.log(lista_compra);

console.log("añado un elemento nuevo a la lista");
lista_compra.push("agua");
console.log(lista_compra);

console.log("sustituyo un elemento nuevo a la lista");
lista_compra.splice(2,1,"sazonador");
console.log(lista_compra);

console.log("Ordeno la lista alfabeticamnete");
console.log(lista_compra.sort());

console.log("Posicion en la que se encuentra huveos en el array");
let busqueda_compra=lista_compra.indexOf("huevos")
console.log(busqueda_compra);

