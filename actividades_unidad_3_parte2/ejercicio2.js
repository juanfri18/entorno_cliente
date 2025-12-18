let nombres = ["Ana", "Luis", "Marta"];
let callback=function mostrarContenido(array){
    console.log("El tamaño final del array es: "+array.length);
    array.forEach(function(nombre) {
        console.log(nombre);

    });        
    

}
function modificarArray(array,callback,nombre){
    console.log("El tamaño inicial del array es: "+array.length);
        array.push(nombre);
        
        callback(array);
}
modificarArray(nombres,callback,"juanfri");