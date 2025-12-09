const a = new Set([1, 2, 3, 4, 5]);
const b = new Set([4, 5, 6, 7]);

// Unión
const union = new Set([...a, ...b]);

// Intersección
const interseccion = new Set([...a].filter(x => b.has(x)));

// Diferencia
const diferencia = new Set([...a].filter(x => !b.has(x)));

// Exclusión (Diferencia simétrica)
const diferenciaSimetrica = new Set([
  ...[...a].filter(x => !b.has(x)),
  ...[...b].filter(x => !a.has(x))
]);

console.log({ union, interseccion, diferencia, diferenciaSimetrica });
