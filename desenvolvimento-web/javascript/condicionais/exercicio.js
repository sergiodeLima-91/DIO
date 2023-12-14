// Faça um programa para calcular o valor de uma viagem.//

// Você terá 5 variáveis. Sendo elas://
 // 1 - Preço do combustível;//
 //2 - Preço do etanol;//
 //3 - Tipo de Combustível no carro;//
 // 4 - Gasto médio de combustível do carro por Km;//
 // 5 - Distância em KM da viagem.//

 //Imprima no console o valor de combustível que será gasto para realizar tal viagem//

 const precoEtanol = 4.41;
 const precoGasolina = 5.77;
 const combustivelNoCarro = 'etanol';
 const kmPorLitroDeEtanol = 16;
 const  kmPorLitroDeGasolina = 12;
 const distanciaDaViagem = 33;
 let valorDaViagem = 0;

 if(combustivelNoCarro === 'gasolina'){
    valorDaViagem = (33 / 12) * 5.77;
    console.log('Esta viagem custará R$', (valorDaViagem).toFixed(2), 'para a gasolina.');
 } else if(combustivelNoCarro === 'etanol'){
    valorDaViagem = (33 / 16) * 4.41;
    console.log('Esta viagem custará R$', (valorDaViagem).toFixed(2), 'para o etanol.');
 }