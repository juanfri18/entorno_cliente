//luego lo comparo con una funcion la cual tiene en cuenta el idioma y nos ayuda con las letras acentuadas.
//localecomapre(variable_a_comparar,"idioma")
  a.toLowerCase().localeCompare(b.toLowerCase(), "es");

/*.
forEach() recibe una función con tres parámetros (los más usados son dos):
numero → el valor del elemento actual
indice → la posición en el array
array → el array completo (opcional) */

//n.charAt(0) → toma la primera letra de la cadena n.
//n.slice(1) → toma el resto de la cadena, desde el índice 1 hasta el final.

/*
.filter() recorre el array y aplica una función que devuelve true o false.
Solo los elementos que devuelvan true se incluyen en el nuevo array.
El array original no se modifica.
*/

/*
.every() devuelve true si todos los elementos cumplen la condición.
Aquí comprobamos n >= 5. */


/*
.some() devuelve true si al menos un elemento cumple la condición.
Comprobamos n >= 9. */

//.find() devuelve el primer elemento que cumpla la condición.

//.findIndex() devuelve el índice del primer elemento que cumpla la condición.
//Si no lo encuentra, devuelve -1.

/*
.findLast() → busca desde el final del array y devuelve el primer elemento que cumpla.
.findLastIndex() → devuelve el índice del primer elemento desde el final que cumpla la condición.
*/