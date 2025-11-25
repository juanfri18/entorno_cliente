// Usando for...in
for (let prop in auto) {
  console.log(prop + ": " + auto[prop]);
}

// Usando Object.entries()
for (let [clave, valor] of Object.entries(auto)) {
  console.log(clave + ": " + valor);
}
