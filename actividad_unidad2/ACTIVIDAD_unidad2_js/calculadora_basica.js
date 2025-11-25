// Calculadora básica (reto opcional)
// Usa prompt() para pedir datos y alert()/console.log() para mostrar resultados.
// Diseñada para ejecutarse en un navegador.

(function() {
  'use strict';

  function pedirNumero(mensaje) {
    while (true) {
      const entrada = prompt(mensaje);
      if (entrada === null) return null; // usuario canceló
      const num = Number(entrada.replace(',', '.'));
      if (!Number.isNaN(num)) return num;
      alert('Entrada no válida. Introduce un número (puedes usar coma o punto).');
    }
  }

  function pedirOperacion() {
    const operaciones = {
      '1': 'Sumar (+)',
      '2': 'Restar (-)',
      '3': 'Multiplicar (*)',
      '4': 'Dividir (/)'
    };
    while (true) {
      const menu = 'Elige la operación:\n' +
        Object.entries(operaciones).map(([k, v]) => `${k}. ${v}`).join('\n') +
        '\n\n(Selecciona 1-4 o pulsa Cancelar para salir)';
      const eleccion = prompt(menu);
      if (eleccion === null) return null;
      if (['1','2','3','4'].includes(eleccion.trim())) return eleccion.trim();
      alert('Operación no válida. Elige 1, 2, 3 o 4.');
    }
  }

  function calcular(a, b, oper) {
    switch (oper) {
      case '1': return a + b;
      case '2': return a - b;
      case '3': return a * b;
      case '4':
        if (b === 0) return { error: 'division_por_cero' };
        return a / b;
      default: return { error: 'operacion_desconocida' };
    }
  }

  function formatoResultado(res) {
    if (typeof res === 'number') {
      // Limitar a 10 decimales y eliminar ceros finales
      return parseFloat(res.toFixed(10)).toString();
    }
    return String(res);
  }

  // Flujo principal
  alert('Calculadora básica\nPulsa Aceptar para comenzar (usa el navegador).');

  while (true) {
    const a = pedirNumero('Introduce el primer número (o pulsa Cancelar para salir):');
    if (a === null) break;
    const b = pedirNumero('Introduce el segundo número (o pulsa Cancelar para salir):');
    if (b === null) break;
    const oper = pedirOperacion();
    if (oper === null) break;

    const resultado = calcular(a, b, oper);
    if (resultado && resultado.error === 'division_por_cero') {
      alert('Error: división por cero no permitida.');
    } else if (resultado && resultado.error) {
      alert('Error: ' + resultado.error);
    } else {
      const opSimbolo = ({'1':'+','2':'-','3':'*','4':'/'}[oper]);
      const msg = `${a} ${opSimbolo} ${b} = ${formatoResultado(resultado)}`;
      // Mostrar en alert y en la consola
      alert('Resultado:\n' + msg);
      console.log(msg);
    }

    const continuar = confirm('¿Quieres realizar otra operación? (Aceptar = Sí, Cancelar = No)');
    if (!continuar) break;
  }

  alert('Gracias por usar la calculadora. ¡Adiós!');
})();