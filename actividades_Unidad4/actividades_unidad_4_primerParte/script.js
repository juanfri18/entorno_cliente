function validarFormulario(){
    let nombre=document.getElementById("nombre").value.trim();
    let apellidos=document.getElementById("apellidos").value.trim();
    let email=document.getElementById("email").value.trim();
    let password=document.getElementById("password").value.trim();
    let edad=document.getElementById("edad").value.trim();

    //comprobaciones nombre
    const patron_nombre= /\b[A-Za-z ]+\b/i;

    let comprobar_nombre=patron_nombre.test(nombre)
    if(nombre===""){
        console.log("Error,el nombre no puede estar vacio");
    }else if(!comprobar_nombre){
        console.log("Error,el nombre solo puede incluir solo letras y espacios");
    }
    //comprobaciones apellidos
    const patron_apellidos= /\b[A-Za-z ]+\b/i;

    let comprobar_apellidos=patron_apellidos.test(apellidos)
    if(apellidos===""){
        console.log("Error,los apellidos no puede estar vacios");
    }else if(!comprobar_apellidos){
        console.log("Error,los apellidos solo pueden incluir solo letras y espacios");
    }
    //comprobaciones email
    const patron_email=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
    let comprobar_email=patron_email.test(email);
    if(email===""){
        console.log("Error,el email no puede estar vacios");
    }else if(!comprobar_email){
        console.log("Error,el email debe de cumplir con el formato nombre@domino.extension");
    }
    //comprobaciones conatraseña
    const patron_contraseña=/^(?=.*[A-Za-z])(?=.*\d).{8,}$/i;
    let comprobar_contraseña=patron_contraseña.test(password);
    if(password===""){
        console.log("Error,La contraseña no puede estar vacia");
    }else if(!comprobar_contraseña){
        console.log("Error,La contraseña debe tener al menos 8 caracteres, donde tiene que tener una letra y un numero como minimo");
    }
    //comprobaciones edad
    const patron_edad=/^[0-9]{2}$/i;
    let comprobar_edad=patron_edad.test(edad);
    if(edad===""){
        console.log("Error,La edad no puede estar vacia");
    }else if(!comprobar_edad){
        console.log("Error,La edad debe ser un numero entre 18 y 99");
    }else if(!(18<edad || edad>99)){
        console.log("Error,La edad debe ser un numero entre 18 y 99");
    }



}