// Quando IMPORTAMOS algo de um arquivo, nós IMPORTAMOS aquilo que está sendo EXPORTADO. Ou seja, a EXPORTAÇÂO precisa estar sendo feita no arquivo do qual se deseja IMPORTAR algo.

const funcoes = require('./funcoes-auxiliares');

console.log(funcoes);

console.log(funcoes.gets());
console.log(funcoes.print('Ola, mundo!'));

// Técnica DESTRUCTURING ou DESTRUCTION - Destructuring em JavaScript é uma técnica poderosa que permite extrair valores de arrays ou objetos e atribuí-los a variáveis individuais de forma simples e concisa. Essa técnica facilita a manipulação de dados complexos, tornando o código mais legível e expressivo¹

// Destruction em Objetos:
const dados = {nome: 'João', idade: 30, profissao: "Engenheiro"};
const {nome, idade, profissao} = dados; // Estas três variáveis estão recebendo os valores do objeto "dados", respectivamente
console.log(idade);

// Destruction em Arrays:
const numeros = [1,2,3,4,5,6,7,8];
const [primeiro, segundo, ...resto] = numeros; // Realmente, o uso dos três pontos ali inseriram na variável "resto" todos os números restantes do 3 em diante!
console.log(primeiro);
console.log(segundo);
console.log(resto);

// Em relação ao import que estamos fazendo, em destruction poderíamos fazer da seguinte forma:
const {gets, print} = require('./funcoes-auxiliares');
print(gets());





//¹(Ver mais em: https://awari.com.br/destructuring-em-javascript-como-utilizar-essa-tecnica-poderosa-2/?utm_source=blog&utm_campaign=projeto+blog&utm_medium=Destructuring%20em%20JavaScript:%20Como%20utilizar%20essa%20t%C3%A9cnica%20poderosa#:~:text=utilizar%20o%20Destructuring-,Destructuring%20em%20JavaScript%20%C3%A9%20uma%20t%C3%A9cnica%20poderosa%20que%20permite%20extrair,c%C3%B3digo%20mais%20leg%C3%ADvel%20e%20expressivo. - Acesso em 28/11/2023)