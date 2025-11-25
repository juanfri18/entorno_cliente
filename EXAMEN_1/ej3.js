let fecha=new Date("2003/11/18");
let dia=fecha.getDay();
//c) i.
if(dia==0){
    console.log("domingo");
}else if(dia==1){
        console.log("lunes");

}else if(dia==2){
        console.log("martes");

}else if(dia==3){
        console.log("miercles");

}else if(dia==4){
        console.log("jueves");

}else if(dia==5){
        console.log("viernes");

}else if(dia==6){
        console.log("sabado");

}
// c) ii
let fecha_actual=new Date();
let edad_aprox=(fecha_actual.getFullYear()-fecha.getFullYear());
console.log(edad_aprox);
//C) iii.
console.log("la fecha de hoy es ",fecha_actual.getDate()," de ",(fecha_actual.getMonth() + 1)," de ",fecha_actual.getFullYear());