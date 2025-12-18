const contador = (function() {
    let cuenta = 0;
    return function() {
        cuenta++;
        return cuenta;
    };
})();
/**
 * La función contador de clausura (closure) Expresión de Función Ejecutada Inmediatamente
 * La función externa se ejecuta una sola vez al definirse, inicializando la variable cuenta en 0.
 * Devuelve una función interna anónima.
 * Esta función interna mantiene una referencia viva a la variable cuenta, protegiéndola del acceso directo desde el exterior.
 * Cada vez que llamamos a contador(), la función interna incrementa esa variable privada y devuelve el nuevo valor.
 */
console.log(contador());
console.log(contador());
console.log(contador());
//devolvera 1 , 2, 3 ... suamndose uno cada vez que se ejecute la funcion
const contador2 = function(inicial = 0) { 
    let cuenta = inicial;
    return function() {
        cuenta++;
        return cuenta;
    };
};

const miContador = contador2(10); 

console.log(miContador());
console.log(miContador()); 
//devolvera 11,12... ya que esta si deja entrar informacion del exterior ya que esta no se ejecuta nada mas empezar como la otra