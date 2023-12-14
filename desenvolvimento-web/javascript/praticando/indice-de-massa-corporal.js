/** Calculando Índice de Massa Corporal
 * 
 * Formula: peso / altura²
 * 
 * Condições:
 * Abaixo de 18.5 - Abaixo do peso;
 * Entre 18.5  e 25 - Peso Normal.
 * Entre 30 e 40 - Obeso;
 * Acima de 40 - Obesidade Grave.
 * 
 */


const peso = 70;
const altura = 1.70;

const imc = peso / (Math.pow(altura, 2));
console.log('Seu IMC é ', (imc).toFixed(2));

if (imc < 18.5){
    console.log('ABAIXO DO PESO');
} else if (imc >= 18.5 && imc <= 25){
    console.log('PESO NORMAL');
} else if (imc >= 25 && imc <= 30){
    console.log('ACIMA DO PESO');
} else if (imc >= 30 && imc <= 40){
    console.log('OBESIDADE');
} else{
    console.log('OBESIDADE GRAVE!');
}
