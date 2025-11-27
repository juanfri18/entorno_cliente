let segundos = 0;

function crono() {
    console.log(segundos);
    segundos++;
}

console.log("CRONOMETRO");
setInterval(crono, 1000);
