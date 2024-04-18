// Construa um algoritmo que imprima o MAIOR número par e o menor número ÍMPAR:

const numeros = [1,2,3,4,5,6,-7,8,9,10];
let maiorPar = 0;
// Um sempre será o menor número impar da esquerda para a direita.
let menorImpar = 1;

for (let i = 0; i < numeros.length; i++) {
    // Maior Número Par:
    if(numeros[i] %2 == 0) {
        maiorPar = numeros[i];
        if (numeros[i] > maiorPar) {
            maiorPar = numeros[i];
        };
    // Menor Número Impar:
    } else {
        if (numeros[i] < menorImpar) {
            menorImpar = numeros[i];
        }
    }
};


console.log(`Maior PAR:${maiorPar}`);
console.log(`Menor IMPAR:${menorImpar}`);

