const ages = [8,13,27,30,22,40];
// Primeiro parâmetro ('accumulador' no caso) armazena a soma dos elementos. Segundo argumento ('age' no caso) refere-se ao valor atual presente no índice da lista. 
const sumOfAges = ages.reduce(function(accumulator,currentAge) {
    return currentAge + accumulator;
},0); // Este número no final representa número inicial no qual a operação se inicia. Se queremos somar todos os números, a soma começa em zero. Porém, podemos mudar este número para que a soma comece  a partir de 20, por exemplo.

console.log('A soma das idades é de ' + sumOfAges);