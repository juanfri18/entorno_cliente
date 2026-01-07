const texto = `
Pedro nació el 1998-07-21.
Sonia nació el 2003-11-05.
La fecha incorrecta es 21-07-1998.
Mi correo es ejemplo123@gmail.com
Teléfono: 678-123-456
Palabras: perro, pato, saco, Sapo, mesa, sol, pico, pera
`;
//PRIMER APARTADO
// \b sirve como una especie de pared , la cual sirve para que el programa sepa que queremos comprobar por palabra
//A)
const patron1= /\b....\b/i;
console.log("primer patron");
console.log(patron1.test("p4to"));
console.log(patron1.test("patos"));
console.log(patron1.test("pito"));
//B)
const patron2= /\b[a-zA-Z]{4}\b/i;
console.log("segundo patron");
console.log(patron2.test("p4to"));
console.log(patron2.test("patos"));
console.log(patron2.test("pito"));
//C)
// el puton en esta situcaion se usa de comodin , es decir , sirve para representar cualquier letra simbolo o numero

//SEGUNDO APARTADO

//A)
const patron3=/^p/i
console.log("tercer patron");
console.log(patron3.test("patos"));
console.log(patron3.test("tito"));
//B)
const patron4=/a$/i
console.log("cuarto patron");
console.log(patron4.test("pata"));
console.log(patron4.test("tito"));
//C)
const patron5=/^p.*o$/i
console.log("quinto patron");
console.log(patron5.test("pato"));
console.log(patron5.test("pata"));
console.log(patron5.test("sapo"));

//APARTADO 3
//A)
const patron6=/^[sp].*[oa]$/i;
console.log("sexto patron");
console.log(patron6.test("Pato"));
console.log(patron6.test("heroe"));
console.log(patron6.test("sapo"));
//el operador | es un operador o es decir parecido a una especie de if , la peculiardad es que lo que pones a la izquirda o a la derecha es lo que se tiene 
// que cumpliri , pero todo al completo , gato|perro a diferecnia de los corchetetes que solo representa a una letras popr muchas que tenga dentro

//APARTADO 4 
//A)
const patron7=/\b[0-9]{2}\b/i
console.log("septimo patron");
console.log(patron7.test("777"));
console.log(patron7.test("77"));
console.log(patron7.test("a99j"));
//B)
const patron8=/\b[0-9]{2,4}\b/i
console.log("octavo patron");
console.log(patron8.test("7"));
console.log(patron8.test("77"));
console.log(patron8.test("777"));
console.log(patron8.test("7777"));
console.log(patron8.test("77775"));
//C)
const patron9=/disparos?/i
console.log("noveno patron");
console.log(patron9.test("disparos"));
console.log(patron9.test("disparo"));
console.log(patron9.test("dispa"));
//APARATDO 5 
//A)
const patron10=/[^0-9]/i;
console.log("decimo patron");
console.log(patron10.test("a"));
console.log(patron10.test("4"));
console.log(patron10.test("@"));
const patron11=/^[^aeiou]/i;
console.log("undecimo patron");
console.log(patron11.test("alber"));
console.log(patron11.test("Juanfri"));
console.log(patron11.test("Intonio"));
//dentro de corchetetes ^ es negacion , y fuera es que comiene por 

//APARATADO 6
const patron12=/\b[0-9]{4}-[0-9]{2}-[0-9]{2}\b/i
console.log("duodecimo patron");
console.log(patron12.test("2003-12-18"));
console.log(patron12.test("42025-12-15"));
//C)
const resultado=patron12.exec(texto);
console.log(resultado);
/** D)
 [
  '1998-07-21',
  index: 16,
  input: '\n' +
    'Pedro nació el 1998-07-21.\n' +
    'Sonia nació el 2003-11-05.\n' +
    'La fecha incorrecta es 21-07-1998.\n' +
    'Mi correo es ejemplo123@gmail.com\n' +
    'Teléfono: 678-123-456\n' +
    'Palabras: perro, pato, saco, Sapo, mesa, sol, pico, pera\n',
  groups: undefined
]
 */

//APARTADO 7 
const patron13=/\b([0-9]{4})-([0-9]{2})-([0-9]{2})\b/i
console.log("patron 13");
const resultado_grupo=patron13.exec(texto);
console.log(resultado_grupo);
if (resultado_grupo) {
    console.log("--- Valores Capturados ---");
    console.log("Año completo: " + resultado_grupo[0]); // Todo el texto
    console.log("Solo Año: " + resultado_grupo[1]);     // Primer paréntesis
    console.log("Solo Mes: " + resultado_grupo[2]);     // Segundo paréntesis
    console.log("Solo Día: " + resultado_grupo[3]);     // Tercer paréntesis
}
/* Un grupo de captura es una parte de la expresión regular encerrada entre paréntesis ().
Sirve para aislar y extraer trozos específicos de información dentro de una coincidencia más grande,
permitiendo reutilizarlos o almacenarlos en variables separadas.
*/

// APARTADO 8
console.log("\n--- APARTADO 8: Flags y Propiedades ---");
//B)
const patronFlags = /fecha/gi;

// c) 
console.log("Flags activas: " + patronFlags.flags); 
// Resultado esperado: "gi"

// d) 
console.log("Código del patrón: " + patronFlags.source);

// APARTADO 9
console.log("\n--- APARTADO 9: lastIndex ---");

// a)
const patronGlobal = /\d{4}/g;



// b)
console.log("--- Búsqueda 1 ---");
console.log(patronGlobal.exec(texto)[0]); 
console.log("El buscador se quedó en la posición: " + patronGlobal.lastIndex);

console.log("--- Búsqueda 2 ---");
console.log(patronGlobal.exec(texto)[0]); 
console.log("El buscador se quedó en la posición: " + patronGlobal.lastIndex);

console.log("--- Búsqueda 3 ---");
console.log(patronGlobal.exec(texto)[0]); 
console.log("El buscador se quedó en la posición: " + patronGlobal.lastIndex);

/* C)
La propiedad .lastIndex es un puntero numérico que indica en qué carácter
se detuvo la última búsqueda. Cuando la flag 'g' está activa, el siguiente .exec()
no empieza desde cero, sino desde lastIndex.
*/


// APARTADO 10
console.log("\n--- APARTADO 10: Validaciones Reales ---");

const patronEmail = /^\w+@\w+\.\w+$/;

console.log("Email válido: " + patronEmail.test("juanfri@gmail.com")); 
console.log("Email malo: " + patronEmail.test("juanfri.com"));       

// b) 
const patronTelefono = /^\d{3}-\d{3}-\d{3}$/;

console.log("Teléfono válido: " + patronTelefono.test("678-123-456"));
console.log("Teléfono malo: " + patronTelefono.test("678123456"));    

// c) 
/*
1. El email fallaría con puntos en el nombre (juan.fri@...) o extensiones dobles (.co.uk).
2. El teléfono es muy rígido: no acepta espacios, ni prefijos internacionales (+34), 
   ni formatos sin guiones.
*/

// APARTADO 11 
console.log("\n--- APARTADO 11: test vs exec ---");

// a) Diferencia teórica:
// - test(): Úsalo para VALIDAR (Devuelve true/false). Es rápido y ligero.
// - exec(): Úsalo para EXTRAER (Devuelve un array con datos). Es para procesar texto.

// b)  
const pass = "secreto123";
const tieneNumeros = /\d/.test(pass); 
console.log("¿Contraseña válida?: " + tieneNumeros); 

// c)  
const tweet = "Hoy aprendo #JavaScript en clase";
const regexHashtag = /#(\w+)/;  
const tag = regexHashtag.exec(tweet);

if (tag) {
    console.log("Hashtag extraído: " + tag[1]);  
}

// APARTADO 12 
console.log("\n--- APARTADO 12: Reto Final ---");
 
const regexFinal = /^[a-z][a-z0-9]{4,9}$/i;

// PRUEBAS
console.log(regexFinal.test("Juan1"));        
console.log(regexFinal.test("SuperUser1"));  
console.log(regexFinal.test("1usuario"));   
console.log(regexFinal.test("Ana"));         
console.log(regexFinal.test("usuarioMuyLargo123"));  
console.log(regexFinal.test("User.Name"));  