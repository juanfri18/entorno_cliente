let nota1=Number(prompt("dime tu primera nota"));
let nota2=Number(prompt("dime tu segunda nota"));
let nota3=Number(prompt("dime tu tercera nota"));
let nota4=Number(prompt("dime tu cuarta nota"));
let nota5=Number(prompt("dime tu quinta nota"));


let notas=[nota1,nota2,nota3,nota4,nota5];
let nota_mayor=0;
let nota_menor=11;
let nota_media=0;
for(let nota of notas){
    if(nota_mayor<=nota){
        nota_mayor=nota;
    }
    if(nota_menor>=nota){
        nota_menor=nota;
    }
 nota_media+=nota;
}
nota_media=nota_media/notas.length;
console.log(`la nota mas alta es : ${nota_mayor} , la nota mas baja es : ${nota_menor} y la nota media es : ${nota_media}`)