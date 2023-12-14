
const {gets, print} = require('./funcoes-auxiliares')

let numeros = [];
let maior = 0;
let contador3 = 0;

for (let contador1 = 0; contador1 < 8; contador1++) {
    numeros.push(gets());
    };

console.log(`Números: ${numeros}`);

for (let contador2 = 0; contador2 <= numeros.length; contador2++) {
    if (contador2 === 0) {
        maior = numeros[contador3];
    } else {
        if (maior < numeros[contador3]) {
            maior = numeros[contador3];
        };
    contador3++
    }
}


console.log(`O maior número encontrado foi ${maior}.`);

// FORMA OTIMIZADA:

let maiorValorEncontrado = 0;

 for (let iterador = 0; iterador < 5; iterador++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
 }

 print(maiorValorEncontrado);