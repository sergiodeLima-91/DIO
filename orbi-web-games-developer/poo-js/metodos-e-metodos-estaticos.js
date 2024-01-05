// CRIANDO MÉTODOS E MÉTODOS ESTÁTICOS:

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }

    // SPEAK é um método estático porque ele não requere a entrada de nenhuma dos atributos do constructor (os parâmetros). Por isso a invocação dele não é por instância e sim diretamente da classe Person!
    static speak() {
        console.log('Hello World!');
    }
}

const person1 = new Person('Sérgio', 'Lima', 32);
person1.getFullName();
// Método speak() é invocado diretamente da classe sem instanciamento da mesma por ser um método estático (que não necessita de entrada de parâmetros para ser executado devidamente)
Person.speak();