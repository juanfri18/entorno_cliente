let nombres = ["Pedro", "Ana", "Pablo", "Lucía", "Paula"];

nombres = nombres.filter(nombre => nombre[0].toLowerCase() !== "p");
console.log(nombres); // ["Ana", "Lucía"]
