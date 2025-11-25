// Pide al usuario su nombre
let num1 = Number(prompt("dime un numero"));
let num2 = Number(prompt("dime otro numero"));
if(num1==num2){
    alert("Los dos numeros son iguales");
}else if(num1<num2){
    alert(`el numero ${num1} es mas pequeño que ${num2}`);
}else{
    alert(`el numero ${num2} es mas pequeño que ${num1}`);
}

