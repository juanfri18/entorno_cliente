//apartado a
let array_coches= new Array();
let coche1 = {
    Marca: "porche",
    modelo: "911",
    año: "1999",
    color: "rojo"
};
let coche2 = {
    Marca: "lamborghini",
    modelo: "performante",
    año: "2024",
    color: "verde lima"
};
let coche3 = {
    Marca: "peugeot",
    modelo: "307",
    año: "2012",
    color: "Gris"
};
let coche4 = {
    Marca: "mercedes",
    modelo: "carota",
    año: "2021",
    color: "negro"
};
let coche5 = {
    Marca: "formula1",
    modelo: "fernando Alonso",
    año: "2025",
    color: "blanco"
};
array_coches.push(coche1,coche2,coche3,coche4,coche5);
console.log(array_coches);
//apartado b
console.log("Mostrar solo los coches que sean negros y uqe sean >= 2020")
for(let coche of array_coches){
    if(coche.color=="negro" && coche.año>=2020){
        console.log(coche);
    }
}
//apartado c
/*
console.log("Mostrar el array ordenado por año descendente");
for(let coche of array_coches){
        console.log(sort(coche.año));
}*/
//apartado d
let solo_marcas=new Array();
for(let coche of array_coches){
        solo_marcas.push(coche.Marca);
}
console.log(solo_marcas);