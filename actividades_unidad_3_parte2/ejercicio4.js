function* colores(){
    let rojo= (Math.random())*100;
    let verde= (Math.random())*100;
    let azul= (Math.random())*100;
    yield rojo;
    yield verde;
    yield azul;
}
const generacionColores = colores();
console.log(generacionColores.next());
console.log(generacionColores.next());
console.log(generacionColores.next());
console.log(generacionColores.next());
const segunda=colores();
for (generacion of segunda){
    console.log(generacion);
}