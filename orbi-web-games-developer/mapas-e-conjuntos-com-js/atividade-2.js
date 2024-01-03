// SETS
// Dado o array [30, 30, 40, 5, 223, 3034, 5], retorne outro array apenas com valores únicos.

const meuArray = [30, 30, 40, 5, 223, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    // Para transformar o Set em array usamos o argumento/operador Spread  com chaves e três pontinhos antes do parâmetro ¹. 
    
    
    
    return [...mySet]
};


console.log(valoresUnicos(meuArray));


// ¹ Spread expande ou une valores de variáveis/objetos diferentes em uma variável/objeto só. Por exemplo:

// Unindo (expandindo) valores de variáveis:

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [6, 7, 8, 9, 10];

// const array3 = [...array1, ...array2];

// console.log(array3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Unindo (expandindo) valores de Objetos:

// const objeto1 = {
//     nome: "João",
//     idade: 25,
//     };
//     const objeto2 = {
//     cidade: "São Paulo",
//     };
    
//     const objeto3 = { ...objeto1, ...objeto2 };
    
//     console.log(objeto3); // { nome: "João", idade: 25, cidade: "São Paulo" }

// Para copiar os valores de um array para outro array:
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [...array1];

// console.log(array2); // [1, 2, 3, 4, 5]

// Para concatenar strings:
// const string1 = "Olá, ";
// const string2 = "mundo!";

// const string3 = string1 + ...string2;

// console.log(string3); // "Olá, mundo!"
// Para passar argumentos para funções:
// function fn(...args) {
// console.log(args);
// }

// fn(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

// Retidado de : https://www.dio.me/articles/o-operador-spread-em-javascript - Acesso em 02/01/2024
