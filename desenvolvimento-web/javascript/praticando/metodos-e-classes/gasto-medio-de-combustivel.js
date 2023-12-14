// Crie uma classe Carro com modelo, cor e gasto de gasolina por quilômetro rodado. Crie um método que demonstre o gasto em reais em relação a distância percorrida pelo veículo em deteminada viagem.

class Carro{
    modelo;
    cor;
    consumoMedioPorKm;

    constructor(modelo, cor, consumoMedioPorKm) {
        this.modelo = modelo;
        this.cor = cor;
        this.consumoMedioPorKm = consumoMedioPorKm;
    }
    
    calcularValorDaViagem(distânciaEmKm, precoGasolina) {
        return ` A viagem com o veículo ${this.modelo}, de cor ${this.cor}, custará R$ ${(distânciaEmKm * this.consumoMedioPorKm * precoGasolina).toFixed(2)}`;
    }
};

const celta = new Carro('Celta 1.0 FLEX', 'cinza', 1/10);
console.log(celta.calcularValorDaViagem(200, 5));

const saleen = new Carro('Saleen 900HP Twin Turbo', 'prata', 1/5);
console.log(saleen.calcularValorDaViagem(200, 5));
