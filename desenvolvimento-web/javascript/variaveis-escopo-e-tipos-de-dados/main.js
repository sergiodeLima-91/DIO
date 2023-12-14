//============== VARIÁVEIS E  ESCOPO ==============
    /**JS é fracamente tipado  e é CASE SENSITIVE
    * Os tipos são convertidos de acorodo com as operações realizadas.
    * 
*============== HOISTING ==============
    Espécie de içamento (ideia de guindaste mesmo). É um fenômeno que desloca as atribuições das funções e as declaraçãoes das variáreis para ANTES dos chamamentos e execuções das mesmas, respectivamente.
    */

teste(); // O chamamento da função vem antes da declaração da função, que está abaixo. 

function teste() {
    console.log('teste');
}

/**  O processo de HOISTING move a atribuição para ANTES do chamamento da FUNÇÃO, mas em reação a variáveis o que ele realoca para antes da execução delas é a sua DECLARAÇÃO. Então:
 * PARA FUNÇÕES: Antecipação das ATRIBUIÇÕES;
 * PARA VARIÁVEIS: Antecipação das DECLARAÇÕES;
 * 
 * Em outras palavras, o HOISTING joga para o inicio (iça, levanta) as funções como um todo (atrubuição + declaração) e somente as declarações de variáveis (declaração sem atribuição de valores.)
*/

//============== ESCOPOS E DIFERENÇAS ENTRE LET, VAR E CONST ==============
//VAR
/**Antes de tudo o VAR era usado para quaisquer declarações. Porém, o hoisting dificultava o trabalho com o VAR, devido o vazamento de escopos. Ele se restringe ao escopo de funções e ao escopo global.*/
if (true) {
    var var2 = 5210;
}

console.log(`VAR: ${var2}`);
/**Maaaaas, se o VAR estiver dentro de uma função ele não irá sofrer influencia do hoisting: */
 function teste3() {
    var var2 = 52100;
 }

 teste3();
 // console.log(var3);
 // Se rodar a resposta no terminal será "ReferenceError: var3 is not defined", pois a var3 está presa no escopo local da função teste3().

 /**LET
  * Se restringe ao escopo local de qualquer tipo de bloco (FOR, WHILE, IF,FUNCTION, etc). Essa é a diferença principal entre VAR e LET.
  * 
  * CONST
  * Semelhante ao LET (se restringe ao escopo local de qualquer tipo de bloco), mas é uma CONSTANTE e seu valor não pode ser reatribuído, mas se atém ao valor que foi atribuído inicialmente.
  */

 //============== CONVENÇÕES DE NOMENCLATURA ==============
 // Não pode começar com números!
var teste = 10; //letras minúsculas na variável, de forma geral.
var $teste = 10;
var _teste = 10; // Convenção: Variável restrita a um determinado escopo.
var Teste = 10; //Classe ou função construtora

//Para constantes e lets (eu acho):
const TESTE = 10; 
const testeVariavel = 10;

//============== Tipos de dados, Wrappers, Coerção de tipos, Boolean, Null e Undefined ==============
/**Tipos Primitivos (imutáveis):
 * 
 * boolean
 * null - ausencia de valor e não inexistencia da propriedade
 * undefined - inexistência, indefinição; quando o elemento (variável, função, classe) nem existe porque não foi declarado!
 * number
 * string
 * synbol
 */

/**Objects (mutáveis) */

console.log(10 == '10'); // desconsidera tipos primitivos na comparação.
console.log(10 === '10'); // Considera arbitrariamente tipos primitivos na comparação.

//============== Tipos de Dados: Numbers, String e Symbol ==============
// São representações matemáticas.
// O JS, assim como algumas linguagens de programação (senão todas), apresenta uma certa imprecisão matémática (falhas de arredondamento) que não retorna o resultado correto em relação a certos cálculos reais. Por exemplo, se você tentar subtrair 0.3 de 0.1 no terminal do node (basta abrir o terminal e digitar node, depois ENTER) verá que o resultado será um número real com diversas casas decimais ao invés de -0.8. Então para corrigir este problema existem mecanismos on-line que fornecem cálculos totalmente precisos. São eles:
// https://0.30000000000000004.com/
//https://mikemcl.github.io/decimal.js/ (para JS em particular)

//==== STRING
// São conjuntos de caracteres imutáveis (retornam objetos sem alterar eles).

// "TEXTO"
// 'TEXTO'
// `TEXTO`
// Convenção pede para usar aspas simples!
console.log('<div class="10">teste<div>')
// E se substituir o 10 da class por um variável:
const id = 88;
console.log('<div class=" '+ id +' ">teste<div>')
//Usando o literal:
console.log(`<div class= "${id}">teste<div>`)
// Com o Template String é possível quebrar linhas sem usar o "/n":
console.log(`<div class= "${id}">
    teste
<div>`)

//==== SYMBOL
// Função que retorna um objeto imutável único.
const x = Symbol('10');
const y = Symbol('10');
console.log(x)
// O resultado do booleano abaixo é false porque, como dito antes, cada symbol criado é ÚNICO.
console.log(x === y);
// Masssss, se tiramos da variável "y" de dentro da função Symbol, teremos true, porque somente x será exclusiva e única.

//============== OBJETOS E MÉTODOS ==============
/**OBJETOS(literais): Coleção dinâmica de chaves e valores  que podem ser acessados  diretamente ou através de uma cheva*/

const pessoa = {
    nome: 'Sérgio',
    sobrenome: ' dos Santos Lima',
    idade: 30,

    apresentaNome: function() {
        return `Meu nome é ${this.nome + this.sobrenome}`
    }
}

console.log(pessoa.nome) // Acesso direto ao valor
console.log(pessoa['nome']) // Acesso ao valor via chave

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