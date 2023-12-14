// Faça um programa que leia os números de um array e printe no terminal somente os pares.

numeros = [1,2,6,8,10,15,17,23,24,30];
numerosPares = [];
numerosImpares = [];

for (let contador = 0; contador < numeros.length; contador++) {
    if (numeros[contador] %2 === 0) {
        numerosPares.push(numeros[contador]);
    } else {
        numerosImpares.push(numeros[contador]);
    }
};

console.log(`Números Pares: ${numerosPares}`);
console.log(`Números Impares: ${numerosImpares}`);