let salir_bucle=true;
let numeros= new Array();
while(salir_bucle){
    let numero=Number(prompt("dime un numero entre el 0 y el 50"));
    if(numero>=0 && numero<=50){
        console.log("numero introducido es correcto");
    }else{
        console.log("numero incorrecto ,debes escribir un numero entre el 0 y el 50");
        continue;
    }
  console.log("numeros en el array:");
    for(i=0;i<21;i++){
        numeros.push(i);
        if(i%2==0){
            console.log(i);
        }
    }
    if(numeros.indexOf(numero) == -1){
        console.log("numero no encontrado");
    }else{
            console.log("numero encontrado...");
            console.log("... Salinedo del bucle");
            salir_bucle=false;
    }
}