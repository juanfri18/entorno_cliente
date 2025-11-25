//CONVERSIONES DE DATOS
String(nrToStr);num.toString();
Number(strToNr);num.toFixed(x);
//BUCLES
for(varaibale in variables)//=>arrays no asociativos si la usamos con asociativos nos devuelve las keys
for([clave,valor] of variables)

//CONDICIONALES
condición ? valorSiVerdadero : valorSiFalso;


//ARRAYS
ArrayX.length()//LONGITUD ARRAY
ArrayX.push()//añadir al array
ArrayX.splice(2,0,"cuadrado","marron") //ArrayX.splice("Posicion comenzar","num elmentos a eliminar","dato a añdir","dato a añdir",...)
arrayX=arr2.concat(arra3);// concatebnamos dos aarys en otro nuevo
arr8.pop(); arr8.shift(); arr8.splice(1, 3); delete arr8[0];console.log(arr8);//eliminar
let findIndex = arr8.indexOf(6);//posición donde se encuentra el elemento da -1 si no lo encuentra y podmos añadir un numero al lado de lo que buscamos para que empiece por esa pos
animales.lastIndexOf("perro");
arrayX.sort()//ordena 
arrayX.reverse()//ordena al contrario de lo que este
//MÉTODO DESCRIPCIÓN
.forEach(ƒ)// Ejecuta la función definida en ƒ por cada uno de los elementos del array.
.every(ƒ) //Comprueba si todos los elementos del array cumplen la condición de ƒ.
.some(ƒ) //Comprueba si al menos un elemento del array cumple la condición de ƒ.
.map(ƒ) //Construye un array con lo que devuelve ƒ por cada elemento del array.
.filter(ƒ) //Filtra un array y se queda sólo con los elementos que cumplen la condición de ƒ.
.findIndex(ƒ)// Devuelve la posición del elemento que cumple la condición de ƒ.
.find(ƒ) //Devuelve el elemento que cumple la condición de ƒ.
.findLastIndex(ƒ) //Idem a 
findIndex()//, pero empezando a buscar desde el último elemento alprimero.

.findLast(ƒ) //Idem a 
 find()//, pero empezando a buscar desde el último elemento al primero.

//ARRAYS de objetos

let mejor = jugadores.reduce((max, jugador) => 
    jugador.puntuacion > max.puntuacion ? jugador : max
);

let masDe300 = ventas.filter(v => v > 300).length;

//DATES
"2003-12-18"
dias = diffMs / (1000 * 60 * 60 * 24);
new Date() //Obtiene la fecha del momento actual.
new Date(str) //Convierte el texto con formato YYYY/MM/DD HH:MM:SS a una fecha.

new Date(numero) //Convierte el número (en formato Tiempo UNIX) a una fecha UTC.

new Date(y, m, d, h, min, s, ms) //Crea una fecha UTC a partir de componentes numéricos.
//
.getDay() //Devuelve el día de la semana: OJO: 0 Domingo, 6 Sábado.
.getFullYear() //Devuelve el año con 4 cifras.
.getMonth() //Devuelve la representación interna del mes. OJO: 0 Enero - 11 Diciembre.
.getDate()// Devuelve el día del mes.
.getHours() //Devuelve la hora. OJO: Formato militar; 23 en lugar de 11.
.getMinutes() //Devuelve los minutos.
.getSeconds()// Devuelve los segundos.
.getMilliseconds() //Devuelve los milisegundos.
.getTime() //Devuelve los segundos transcurridos desde 1/1/1970.

//STRINGS

let palabras = frase.split(" "); // Divide la frase por espacios
frase.toLowerCase()// Pasamos a minúsculas para contar tanto 'A' como 'a'

//  Mostrar la frase en mayúsculas y en minúsculas
let mayusculas = frase.toUpperCase();
let minusculas = frase.toLowerCase();

//  Detectar si contiene la palabra “javascript”
let contiene_js = frase.toLowerCase().includes("javascript");

