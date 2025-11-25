let nombre=prompt("dime tu nombre de usuario");
let usuario={
    "usuario": nombre,
    "contraseña_guardada":"12345j",
     "intentos":3
}
while(usuario.intentos>0){
   
    let contraseña_teclado= prompt(`escribe tu contraseña solo tienes ${usuario.intentos} intentos`);
    if(usuario.contraseña_guardada==contraseña_teclado){
        alert("Has iniciado sesion correctamente");
        break;

    }else{
        alert("Lo siento esa no es la contraseña , vuelve a intentarlo")
        usuario.intentos--;
    }
    if(usuario.intentos==0){
        console.log("te has quedado sin intentos");
        break;
    }
}