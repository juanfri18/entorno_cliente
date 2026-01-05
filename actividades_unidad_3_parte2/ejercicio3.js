function exito(){
    console.log("Tarea completada");
}
function fallo(){
    console.log("Error en la tarea");
}
function ejecutarTarea(callbackExito, callbackError){
    let suerte= Math.random();
    if(suerte>0.5){
        callbackExito();
    }else{
        callbackError();
    }
}
ejecutarTarea(exito,fallo);
ejecutarTarea(exito,fallo);
ejecutarTarea(exito,fallo);
ejecutarTarea(exito,fallo);
ejecutarTarea(exito,fallo);