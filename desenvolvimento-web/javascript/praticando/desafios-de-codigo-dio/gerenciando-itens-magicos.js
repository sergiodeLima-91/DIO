const prompt = require("prompt-sync")();

class ItemMagico {
//TODO: Crie adequadamente um construtor que receba todos os atributos referente ao item mágico:
    constructor(tipo, dano, resistência) {
    this.tipo = tipo,
    this.dano = dano,
    this.resistência = resistência

    }

    calcularDano() {
    return this.tipo === 'arma' ? this.dano * 2 : this.dano;
    }
}
    
// Solicita ao usuário para digitar o tipo do item mágico, o dano no item e a resistência do item
const tipoItem = prompt("> Item: ");
const danoItem = prompt("> Dano:  ")
const resistenciaItem = prompt("> Resistência: ");

//TODO: Crie o de um objeto ItemMagico personalizado com base no tipo escolhido
const itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem)
// TODO: Imprima os atributos do item personalizado
console.log("Tipo: " +  itemPersonalizado.tipo);
console.log("Dano: " + itemPersonalizado.dano);
console.log("Resistencia: " + itemPersonalizado.resistência);

// Calcula e imprime o dano causado pelo item personalizado em um combate simulado
const danoTotal = itemPersonalizado.calcularDano();
console.log("Dano em combate: " + danoTotal);

//===== CÓDIGO APROVADO PELA DIO =====:

/*class ItemMagico {
    //TODO: Crie adequadamente um construtor que receba todos os atributos referente ao item mágico:
      constructor(tipo, dano, resistência) {
        this.tipo = tipo,
        this.dano = dano,
        this.resistência = resistência
    
      }
    
      calcularDano() {
        return this.tipo === 'arma' ? this.dano * 2 : this.dano;
      }
    }
    
// Solicita ao usuário para digitar o tipo do item mágico, o dano no item e a resistência do item
const tipoItem = gets();
const danoItem = parseInt(gets())
const resistenciaItem = parseInt(gets());

//TODO: Crie o de um objeto ItemMagico personalizado com base no tipo escolhido
const itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem)
// TODO: Imprima os atributos do item personalizado
print("Tipo: " +  itemPersonalizado.tipo);
print("Dano: " + itemPersonalizado.dano);
print("Resistencia: " + itemPersonalizado.resistência);

// Calcula e imprime o dano causado pelo item personalizado em um combate simulado
const danoTotal = itemPersonalizado.calcularDano();
print("Dano em combate: " + danoTotal); */
