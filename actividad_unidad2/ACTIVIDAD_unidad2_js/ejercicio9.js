console.log(10 / "hola"); 
console.log(10 / 0);
/*
en primer lugar aparece NaNEsto ocurre porque JavaScript intenta convertir la cadena "hola" a un número para la división, no puede, por lo que NaN (Not a Number) 
en segundo lugar devuelve Infinity ya que  la división de un número finito entre cero resulta en infinito. 
*/