const numeros = [10, 1, 20, 3, 2];
/*.
forEach() recibe una función con tres parámetros (los más usados son dos):
numero → el valor del elemento actual
indice → la posición en el array
array → el array completo (opcional) */
numeros.forEach((numero,indice)=> {
  console.log("Número:", numero);
  console.log("Cuadrado:", numero * numero);
  console.log("Posición:", indice);
  console.log("-------------");
});