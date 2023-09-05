const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Tasa de cambio fija: 1 dólar = 0.85 euros
const tasaCambio = 0.85;

console.log("Bienvenido al conversor de dólares a euros.");
console.log("Por favor, ingrese la cantidad en dólares que desea convertir.");

rl.question("Cantidad en dólares: ", (cantidadDolares) => {
  // Convertir la entrada a número
  cantidadDolares = parseFloat(cantidadDolares);

  if (isNaN(cantidadDolares)) {
    console.log("Debe ingresar un número válido.");
  } else {
    const cantidadEuros = cantidadDolares * tasaCambio;
    console.log(`\n${cantidadDolares} dólares son equivalentes a ${cantidadEuros.toFixed(2)} euros.`);
    console.log(`Taza de cambio usada ${tasaCambio}`);
  }

  rl.close();
});