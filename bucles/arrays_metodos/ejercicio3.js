//no habia leido lo de map y lo heheco de dos maneras :)
let numeros=[1,2,3,4,5,6,7];
let cuadrados=[];

for(let numero of Object.values(numeros)){
    cuadrados.push((numero**2));
}
console.log(cuadrados);
//segunda forma
const numeros2 = [1, 2, 3, 4, 5];

const cuadrados2 = numeros.map(num => num * num);

console.log(cuadrados);
