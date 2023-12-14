/**Funções que não retornam nada são chamadas de PROCEDIMENTOS. 
 * 
 * O QUE É UMA FUNÇÃO?
 * Pequeno trecho de código que pode ser executado várias vezes com valores diferentes passados como parâmetros.
 * 
*/

/**FUNÇÕES PROCEDIMENTAIS: */
function ComidaPreferida(comida){
    console.log('Eu gosto de comer ' + comida)
}


ComidaPreferida('orelha de velho')
ComidaPreferida('rubacão')

/**FUNÇÕES COM RETORNO: */
 function quadrado(numero){
    return numero * numero
 }


 console.log(quadrado(10));
 console.log(quadrado(15));
 console.log(quadrado(20));

 /** ORGANIZANDO FUNÇÕES */
function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5){
        return 'ABAIXO DO PESO';
    } else if (imc >= 18.5 && imc <= 25){
        return 'PESO NORMAL';
    } else if (imc >= 25 && imc <= 30){
        return 'ACIMA DO PESO';
    } else if (imc >= 30 && imc <= 40){
        return 'OBESIDADE';
    } else{
        return 'OBESIDADE GRAVE!';
    }
}

function main() {
    const peso = 120;
    const altura = 1.75;
    const imc = calcularIMC(peso, altura);
    console.log('Seu IMC é '+ (imc).toFixed(2) + ' e sua classificação se enquadra em ' + classificarImc(imc));
}

main()

/** No JS funções são objetos manipuláveis do tipo função. São tão manipuláveis quanto uma string ou inteiro. Porém,isto é bem particular NO JS, pois na maioria das linguagens de programação não há isso em relação as funções. Rode o comando abaixo para ver .*/
console.log(main);
/** FUNÇÃO EXECUTADA IMEDIATAMENTE */
// Existe uma maneira de executar uma função automaticamente e de forma imediata:

function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5){
        return 'ABAIXO DO PESO';
    } else if (imc >= 18.5 && imc <= 25){
        return 'PESO NORMAL';
    } else if (imc >= 25 && imc <= 30){
        return 'ACIMA DO PESO';
    } else if (imc >= 30 && imc <= 40){
        return 'OBESIDADE';
    } else{
        return 'OBESIDADE GRAVE!';
    }
}

(function main() {
    const peso = 120;
    const altura = 1.75;
    const imc = calcularIMC(peso, altura);
    console.log('Seu IMC é '+ (imc).toFixed(2) + ' e sua classificação se enquadra em ' + classificarImc(imc));
})(); // <-----

//É possível até mesmo retirar o nome da função "main" que antecede o parêntese sem afetar a execução dela. Isso porque ela está referenciada nos parênteses seguintes mostrados na seta. Isso é feito para ISOLAR O CÓDIGO E/OU O ESCOPO DA FUNÇÃO.

//=== ARROW FUNCTIONS:
// Sintaxe: () => {}
// Arrow (seta) Functions são uma maneira mais elegante e sucinta de escrever funções! 
/** Exemplo de uma função de boas vindas: */
function boasVindas(nome) {
    return `Seja bem-vindo, (a) ${nome}!`
}

const meuNome = 'Sérgio'
console.log(`Retornando função com sintaxe normal: ${boasVindas(meuNome)}`)
// Agora vamos usar com Arrow Functions e veremos que ficará numa linha de código só:
const boasVindasAf = nome => `Seja bem-vindo (a), ${nome}!`
console.log(`Retornando Arrow Function: ${boasVindasAf(meuNome)}`)

// ARROW FUNCTIONS X FUNCTIONS:
// Arrow Functions não têm o contexto (this) que as functions têm!

// ==== FIRST CLASS FUNCTIONS - HIGH ORDER FUNCTIONS - FUNCTION DECLARATIO - FUNCTION EXPRESSION ====
// Função pode ser atribuida a uma variável, passada como parâmetro e retornada como resposta. Nomes das funções são meros detalhes, pois para invocar elas precisamos somente das referências e não de nomes em si.

// Função dentro de variável (por ser um objeto):
function falarMeuNome() {
    console.log('Meu nome é Sérgio')
}

const referenciaNova = falarMeuNome

referenciaNova()

//Passando uma função para outra função:
function falarMeuNomeCompleto(falarMeuNome) {
    falarMeuNome()
    console.log('dos Santos Lima')
}

falarMeuNomeCompleto(falarMeuNome)

// FUNCTION DECLARATION:
// Sofre HOISTING!
function nomeDaFuncao() {
    console.log('Nome da Função')
}

// FUNCTION EXPRESSION:
// NÃO sofre HOISTING!
// Através de uma variável
const nomeDeOutraFuncao = function() {
    console.log('Nome da Outra Função')
}

// CLOSURES OU FECHAMENTOS:
// Quando declaramos uma função, ela se lembra do contexto onde ela foi declarada!

function soma(x) {
    return function (y) {
        return x + y;
    }
}

const somaParcial = soma(10)

console.log(somaParcial(20))
console.log(somaParcial(30))
console.log(somaParcial(40))

//INVOCAÇÃO DIRETA - CALL - APPLY - OPERADOR NEW:
// Direta:
nomeDeOutraFuncao()
//Aplly: contexto, atributos e argumentos da função
const grito = {
    nome: 'Sérgio',
    idade: 30
}

function gritar(prefixo) {
    console.log(prefixo, this.nome)
}
gritar.apply(grito, ['Iaêêêêê'])
//Call:
gritar.call(grito, 'Faaaaaalaaaa') //Recebem quantos argumentos forem passados!
//New - Passa objeto (contexto) pra função e retorna o objeto decorado.

// CALLBACKS:

function adicao(x, y) {
    return x + y
}

function multiplicacao(x, y) {
    return x * y
}

function calcular(x, operacao, y) {
    console.log(operacao(x, y))
}

calcular(10, adicao, 20) 
calcular(10, multiplicacao, 20)
// Vemos muito isso em programação voltada aos navegadores (callback):
document.getElementById('btn1').addEventListener('click', () => {
    console.log('Clicou!')
})
