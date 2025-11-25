// 🧩 1️⃣ Operadores aritméticos e incremento
let nr1 = 3;
let nr2 = 7;
let result = nr1 + nr2;
console.log("Suma:", result);

let nr = 2;
console.log(nr++, nr); // post-incremento (muestra 2 luego 3)
console.log(++nr);     // pre-incremento (muestra 4)

// 🧩 2️⃣ Comparaciones
let x = 5;
let y = 6;
console.log(x != y);   // true
console.log(x !== y);  // true
console.log(x < y);    // true

// 🧩 3️⃣ Creación de arrays
let arr3 = new Array(10);
console.log("arr3:", arr3);

let arr4 = [10];
console.log("arr4:", arr4);

// 🧩 4️⃣ Tipos de elementos
let arr6 = ["Hola", 45, true];
console.log(typeof arr6[0], typeof arr6[1], typeof arr6[2]);

// 🧩 5️⃣ Constantes y mutabilidad
const arr = ["Hola"];
arr[0] = "Cadista"; // permitido (mutar contenido)
console.log(arr[0]);

// 🧩 6️⃣ Tipos dentro de un array corto
console.log(typeof arr[0], typeof arr[1], typeof arr[2]);

// 🧩 7️⃣ Índices negativos
let arrNeg = ["Hola", 45, true];
arrNeg[-1] = "FIAT";
console.log(arrNeg[0]);
console.log(arrNeg[1]);
console.log(arrNeg[2]);
console.log(arrNeg[-1]); // propiedad extra, no índice

// 🧩 8️⃣ Propiedad length
let colores = ["black", "orange", "pink"];
console.log("Tamaño:", colores.length);

let booleanos = [true, false, false, true];
console.log("Tamaño:", booleanos.length);

let vacio = [];
console.log("Tamaño:", vacio.length);

// 🧩 9️⃣ Último elemento
let ultimoElemento = colores[colores.length - 1];
console.log("Último elemento:", ultimoElemento);

// 🧩 🔟 Índices vacíos
let numeros = [12, 24, 36];
numeros[5] = 48;
console.log("Tamaño:", numeros.length);
console.log("numeros:", numeros);

// 🧩 11️⃣ push()
let frutasguays = ["pero", "pera", "limon"];
frutasguays.push("takasnina");
let longitud = frutasguays.push("esparrago");
console.log(frutasguays);
console.log("longitud devuelta por push:", longitud);

// 🧩 12️⃣ splice() insertando sin eliminar
let arrSplice = ["circulo", "triangulo", "rectangulo", "pentagono"];
arrSplice.splice(2, 0, "cuadrado", "linea");
console.log(arrSplice);

// 🧩 13️⃣ splice() reemplazando elementos
let arr1 = ["circulo", "triangulo", "rectangulo", "pentagono"];
arr1.splice(2, 2, "cuadrado", "linea");
console.log("Resultado 1:", arr1);

// 🧩 14️⃣ splice() eliminando más de los que hay
let arr2 = ["circulo", "triangulo", "rectangulo", "pentagono"];
arr2.splice(2, 20, "cuadrado", "linea");
console.log("Resultado 2:", arr2);

// 🧩 15️⃣ concat()
let arr5 = [1, 2, 3];
let arr6b = [4, 5, 6];
let arr7 = arr5.concat(arr6b);
console.log(arr7);

let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);

// 🧩 16️⃣ Manipulación con pop, shift, splice y delete
arr8.pop();           // elimina último elemento
arr8.shift();         // elimina primer elemento
arr8.splice(1, 3);    // elimina 3 elementos desde índice 1
delete arr8[0];       // deja un hueco en el índice 0
console.log("arr8 final:", arr8); // muestra el array con hueco

// Definimos un array con algunos números
arr8 = [2, 6, 7, 8];

// Buscamos el primer elemento que sea igual a 6 usando una función normal
let findValor = arr8.find(function(e) { 
    return e === 6;  // la función devuelve true solo si e es 6
});
// findValor ahora es 6, porque es el primer elemento que cumple la condición

// Buscamos el primer elemento que sea igual a 10 usando una función flecha
let findValor2 = arr8.find(e => e === 10);
// findValor2 será undefined, porque no existe ningún 10 en arr8

// Mostramos los resultados
console.log(findValor, findValor2); 
// Salida: 6 undefined
