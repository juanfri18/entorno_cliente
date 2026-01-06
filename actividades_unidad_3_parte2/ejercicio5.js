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
