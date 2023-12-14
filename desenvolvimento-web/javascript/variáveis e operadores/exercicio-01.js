// Faça um programa para calcular o valor de uma viagem.//

// Você terá 3 variáveis. Sendo elas://
 // 1 - Preço do combustível;//
 // 2 - Gasto médio de combustível do carro por Km;//
 // 3 - Distância em KM da viagem.//

 //Imprima no console o valor de combustível que será gasto para realizar tal viagem//

 const precoCombustivel = 5.63;
 const gastoMedio = 0.1;
 let distanciaDaViagem = 23.5;
 
 console.log('Você gastará R$ ', (gastoMedio * distanciaDaViagem) * precoCombustivel, 'nesta viagem.');