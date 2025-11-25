let alumnos=["Juanfri","Jose","Miguel","adri","fermin"];
let nombre_buscar=prompt("escribe un nmobre y te dire si es un alumno de DAW");
if(alumnos.includes(nombre_buscar)){
    console.log("Este alumno si pertenece a DAW");
}else{
        console.log("Este alumno no pertenece a DAW");
}