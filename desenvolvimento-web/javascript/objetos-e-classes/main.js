/*============================= CRIANDO OBJETOS E CLASSES EM JS =============================*/
console.log('');
console.log('===============================');
console.log('CRIANDO OBJETOS E CLASSES EM JS');
console.log('===============================');

// ENTENDENDO OBJETOS EM JS:
    /**CONCEITO DE OBJETO NO JS:
    * Coleção dinâmica de chave e valor.
    */

const pessoa1 = {
    nome: 'Sérgio',
    idade: 32
};

console.log(pessoa1);
console.log(pessoa1.nome);
console.log(pessoa1.idade);

    /**Incrementando (acrescentando valores) ou excluindo dos objetos de forma dinâmica: */
    //Acrescentando:
pessoa1.altura = 1.75;
console.log(pessoa1.altura)
    //Retirando:
delete pessoa1.nome;
console.log(pessoa1);

    /**INSERINDO MÉTODOS NA FUNÇÃO */
console.log('===========================');
console.log('INSERINDO MÉTODOS NA FUNÇÃO');
console.log('===========================');
const pessoa2 = {
    nome: 'Antonio',
    idade: 32,
    // Existe em JS uma palavra reservada que serve como uma espécie de contextualizador. Dentro de uma função por exemplo ele aponta para o ojeto que a a chamou. Me parece, wm certo sentido, com "self" do Python. Ver mais em https://www.dio.me/articles/entendendo-o-que-e-o-this-em-javascript#:~:text=O%20%22this%22%20em%20JavaScript%20se,o%20objeto%20%22window%22).

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`) // O print formatado do Python no JS é chamado de Template String e fica entre crases com o "${}" como base de referenciação. Ele é linkado no HTML Ver mais em https://medium.com/collabcode/template-string-%C3%A9-top-demais-02-5d8964726a32
    }
};

pessoa2.descrever();

    // A função ou método acaba, em certo sentido, tornando-se um obejto. Por isso, pode-se manipular seus valores:
pessoa2.descrever = function() {
    console.log(`Somente para fixar, meu nome é ${this.nome}.`);
}

pessoa2.descrever();

    /***ACESSANDO DINAMICAMENTE VALORES DE UM OBJETO */
    // Se eu quiser saber os dados de algum atributo de forma indirera (ou dinâmica), posso fazer isso através de uma string:

console.log(pessoa2['nome']); // Isso é chamado de notação de coleção (?)

    // OU reatribuindo nomes aos valores do objeto:

pessoa2['nome'] = 'teste' //A string que fica entre as chaves ("nome" no caso) representa uma reatribuição. Logo, isso é usado para casos em que eu não sei os atributos sou métodos de um objeto. Será isso?

// ENTENDENDO CLASSES
    // COMO CRIAR CLASSES E INSTÂNCIAS:
    //CLASSE é a ideia que nós temos sobre como algo DEVE ser.
class CarroPopular {
    montadora;
    modelo;
    velocidade;

    descreva() {
        console.log('');
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Velocidade máxima: ${this.velocidade} Km/h`);
        console.log(`Montadora: ${this.montadora}`);
    }
};
    // Agora, vamos instanciar a classe carro criando dois carros!
    // INSTÂNCiA é a concretização de uma classe. É a ocorrência dela. É como de fato o algo abstraído É.
 const celta = new CarroPopular;
 celta.modelo = 'Celta FLEX 1.0 Unlimited Edition';
 celta.montadora = 'chevrolet';
 celta.velocidade = 110;

const golf = new CarroPopular;
 golf.modelo = 'Golf LTZ 1.5 FLEX';
 golf.montadora = 'wolksvagem';
 golf.velocidade = 150;

 celta.descreva();
 golf.descreva();

console.log('');
console.log('====================================');
console.log('CRIANDO INSTÂNCIAS COM O CONSTRUCTOR');
console.log('====================================');
 //CONSTRUCTOR diz respeito ao que deve ocorrer primeiro e/ou obrigatoriamente quando uma classe é instanciada. Por exemplo, não existe nenhuma marca de carro sem montadora ou modelo. Logo, estes dados devem ser obrigatóriamente atribuiídos aos atributos quando as instâncias forem chamadas. Se estes dois atributos serão obrigatórios, logo eles devem ser passados como parâmetros obrigatórios também.

class CarroDeLuxo {
    montadora;
    modelo;
    velocidade;

    constructor(modelo, montadora, velocidade) { //Método constructor torna certos comportamentos OBRIGATORIOS para o funcionamento da classe.
        this.montadora = montadora;
        this.modelo = modelo;
        this.velocidade = velocidade;
    }
    
    descrever() {
        console.log(`Modelo: ${this.modelo} - Montadora: ${this.montadora} - Velocidade: ${this.velocidade} Km/h`);
    }
};

const mercedez = new CarroDeLuxo('Mercedez-Bens 450HP INP','Mercedez-Bens', 256);
const saleen = new CarroDeLuxo('Saleen 900 HP 1000 rpm', 'Saleen', 450);

console.log(celta);
console.log(golf);
console.log(mercedez);
console.log(saleen);

console.log('');
console.log('=========================');
console.log('FUNÇÕES RECEBENDO OBJETOS');
console.log('=========================');
//Vamos inserir as classes (objetos) criadas anteriormente dentro de funções e ver o seu funcionamento.

class MedicaoDeQI {
    name;
    qi;

    constructor(name, quocienteDeInteligencia) {
        this.name = name;
        this.qi = quocienteDeInteligencia;
    }

    mostrarQi() {
        console.log(`Quociente de Inteligência: ${this.qi}`)
    }
}

function compararQi(qi1, qi2) {
    if (qi1.qi > qi2.qi) {
        console.log(`${qi1.name} é o quociente de inteligência maior.`)
    } else if (qi2.qi > qi1.qi) {
        console.log(`${qi2.name} é o quociente de inteligência maior.`)
    } else {
        console.log(`Os dois são igualmente inteligentes.`)
    }
}

const cara1 = new MedicaoDeQI('João', 100);
const cara2 = new MedicaoDeQI('José',100);

compararQi(cara1, cara2);
