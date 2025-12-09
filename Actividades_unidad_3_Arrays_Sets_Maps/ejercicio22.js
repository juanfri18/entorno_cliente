
let texto = "Hola, hola! ¿Cómo estás? Hola mundo, mundo bello.";
const palabras = texto
  .toLowerCase()
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // quitar tildes
  .replace(/[.,!?¿]/g, "") // quitar signos
  .split(/\s+/);

console.log(palabras);
const palabrasUnicas = new Set(palabras);
console.log(palabrasUnicas);
console.log(palabrasUnicas.size); // cuántas diferentes

const contador = new Map();
palabras.forEach(p => contador.set(p, (contador.get(p) || 0) + 1));

for (const [palabra, veces] of contador) {
  if (veces > 1) console.log(`${palabra}: ${veces}`);
}
