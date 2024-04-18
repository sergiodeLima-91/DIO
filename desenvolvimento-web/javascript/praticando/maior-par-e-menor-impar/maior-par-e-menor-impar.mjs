// Construa um algoritmo que imprima o MAIOR número par e o menor número ÍMPAR de uma lista de números:

function maiorNumeroPar(num) {
    let maiorPar = 0;
    for (let i = 0; i < num.length; i++) {
        if(num[i] %2 === 0) {
            maiorPar = num[i];
            if (num[i] > maiorPar) {
                maiorPar = num[i];
            }
        }
    }

    return maiorPar;
};

function menorNumeroImpar(num) {
    // Um sempre será o menor número impar da esquerda para a direita.
    let menorImpar = 1;
    for (let i = 0; i < num.length; i++) {
        if (num %2 !== 0) {
            if (num[i] < menorImpar) {
                menorImpar = num[i];
            }
        }        
    }

    return menorImpar;
};

const numeros = [1,2,3,4,5,6,-7,8,9,10];

console.log(`Maior PAR:${maiorNumeroPar(numeros)}`);
console.log(`Menor IMPAR:${menorNumeroImpar(numeros)}`);
