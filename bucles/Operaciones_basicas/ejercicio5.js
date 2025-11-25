let numero1=Number(prompt('dime un numero y te dire su factorial'));
let factorial=1;
for(i=numero1;i>0;i--){
factorial=factorial*i;
}
console.log(`el factorial de ${numero1} es ${factorial}`);
