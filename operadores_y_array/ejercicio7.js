//peso y alturas estado unidense
let peso_libras=Number(prompt("dime tu peso en pulgadas"));
let altura_pulgadas=Number(prompt("dime tu altura en pulgadas"));
//pesos y alturas euripeas
let peso_kilos=peso_libras/2.2046;
let altura_cm=altura_pulgadas*2.54;
let altura_m=altura_cm/100;
let imc_cm_kilos=peso_kilos/(altura_m**2);

alert(`tu IMC en m y kilos es ${imc_cm_kilos}`);