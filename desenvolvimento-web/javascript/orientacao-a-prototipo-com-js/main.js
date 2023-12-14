// Prototipo tem a ver com orientação a objeto em JS. O protótipo serve como uma base para o objeto.
// Por exemplo:

const pessoa = {
    gênero: 'masculino'
    
}

const sergio = {
    nome: 'Sérgio',
    idade: 30,
    __proto__: pessoa // Propriedade "__proto__" (de protótipo) está recebendo os dados do objeto "pessoa". Isso tem a ver com herança no JS!
}

console.log(sergio.gênero); // Quando o atributo não é encontrado na classe, o protótipo é acessado até que o atributo seja encontrado.

// O que temos em JS não são exatamente classes e sim funções construtoras e protótipos.
// Funções têm um super poder de serem invocadas através do operador NEW.
// Isso:
function Pessoa2(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa2.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}`);
}

// É a mesma coisa que isso:
class Pessoa3 {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade
    }
    falar () {
        console.log(`Meu nome é ${this.nome}`);
    }
}

// SOBRESCRITA E SHADOWING:
// Os métodos podem ser sobrescritos uma vez só.
const pessoa4 = {
    idade: 18
}

const renan = {
    nome: 'renan',
    idade: 30,
    __proto__: pessoa4
    
}

console.log(`Método de sobrescita: ${renan.idade}`)
 
// CRIAÇÃO DE OBJETOS LITERAIS COM PROTOTIPOS
const jose = Object.create(pessoa)

jose.nome = 'José'

console.log(`obejtos literais com prototipos: ${jose.gênero}`)

// Até mesmo strings tem prototipos em JS!
const texto = 'banana'

console.log(texto.__proto__)