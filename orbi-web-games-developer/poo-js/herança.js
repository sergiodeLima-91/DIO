// HERANÇA:

// 1- Criando classe para animais:

class Animal {
    constructor(name) {
      this.name = name;  
    }

    speak() {
        console.log(`${this.name} made some noise!`)
    }
}

// 2- Criando classe cachorro que herdará as características da classe Animal:
class Dog extends Animal{
    // Por extender da classe Animal, os parâmetros da classe Dog precisam ser os mesmos dela. 
    constructor(name) {
        this.name = name;
        // Em seguida usamos o SUPER para invocar o constructor da classe Animal:
        super(name)
    }
}

const animal = new Animal('Simba');
const dog = new Animal("Bob");


animal.speak();
dog.speak();