let jugadores=[
    {
        nombre:"juanfri",
        puntuacion:2023
    },
        {
        nombre:"manuel",
        puntuacion:1050
    },    
    {
        nombre:"jorge",
        puntuacion:1999
    },    
    {
        nombre:"evaristo",
        puntuacion:2022
    },   
    {
        nombre:"jordi",
        puntuacion:33
    }
];
let mayor_punt=0;
let nombre_mayor_punt;
let puntuacion_total=0;
let arrays_nombres=new Array();
//metodo reduce
/*
let mejor = jugadores.reduce((max, jugador) => 
    jugador.puntuacion > max.puntuacion ? jugador : max
);
*/
for(jugador of jugadores){
    if(jugador.puntuacion>mayor_punt){
        mayor_punt=jugador.puntuacion;
        nombre_mayor_punt=jugador.nombre;
    }
    puntuacion_total+=jugador.puntuacion;
    arrays_nombres.push(jugador.nombre);
}
//mayor puntiacion
console.log(`el jugador con mayor puntuacion es ${nombre_mayor_punt} con una puntuacion de : ${mayor_punt}`);
//promedio
console.log("La puntuacion media de todos los jugdaroes es de : ");
console.log(puntuacion_total/jugadores.length);
//Los nombres oredandos
console.log(arrays_nombres.sort());
