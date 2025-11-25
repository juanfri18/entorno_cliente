let coches = [
  { modelo: "Golf", color: "negro", año: 2021 },
  { modelo: "Polo", color: "rojo", año: 2018 },
  { modelo: "Tiguan", color: "negro", año: 2022 }
];

let negros = coches.filter(coche => coche.color === "negro");
console.log(negros);
