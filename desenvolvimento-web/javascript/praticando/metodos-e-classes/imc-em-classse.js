// Refazer exercicio do IMC em forma de classe!

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
        
    }

    calculeIMC () {
        return this.peso / (Math.pow(this.altura, 2));
    }

    classifiqueIMC() {
        const imc = this.calculeIMC();
        if (imc < 18.5){
            return `Seu nome é ${this.nome}, o valor de seu IMC é ${(imc).toFixed(2)} e você encaixa-se no grau ABAIXO DO PESO`;
        } else if (imc >= 18.5 && imc <= 25){
            return `Seu nome é ${this.nome}, o valor de seu IMC é ${(imc).toFixed(2)} e você encaixa-se no grau PESO NORMAL`;
        } else if (imc >= 25 && imc <= 30){
            return `Seu nome é ${this.nome}, o valor de seu IMC é ${(imc).toFixed(2)} e você encaixa-se no grau ACIMA DO PESO`;
        } else if (imc >= 30 && imc <= 40){
            return `Seu nome é ${this.nome}, o valor de seu IMC é ${(imc).toFixed(2)} e você encaixa-se no grau OBESIDADE`;
        } else{
            return `Seu nome é ${this.nome}, o valor de seu IMC é ${(imc).toFixed(2)} e você encaixa-se no grau OBESIDADE GRAVE`;
        }
    }
};

const jose = new Pessoa('José', 70, 1.75);
console.log(jose.classifiqueIMC());

const sergio = new Pessoa('Sérgio', 72, 1.75);
console.log(sergio.classifiqueIMC());

const lucas = new Pessoa('Lucas', 110, 1.75);
console.log(lucas.classifiqueIMC());
