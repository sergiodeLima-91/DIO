/* Valores booleanos*/
const nenhumPoliticoRouba = false;
const todoSerHumanoErra = true;

/**Validação Booleana com Resto da Divisão*/
const numero = 55;
const valorPar = numero  %2 === 0;

console.log(valorPar);

/*Operador Condicional IF*/
if (valorPar){
    console.log('PAR');
}
/**Operador de Negeção com IF */
if (!valorPar){
    console.log('IMPAR');
}

/**Estrutura Condicional com ELSE IF */
if (numero < 2){
    console.log(numero, 'é menor que dois!');
}else if (numero >5){
    console.log(numero, 'é maior que dois e cinco!');
} else{
    console.log(numero, 'não é menor do que dois ou maior que cinco!!');
}

/**Inserindo Condicionais Em Variáveis - A condicional é aquela que vem logo após o "=" depois da variável "numeroDivisivelPorCinco" */
const numeroDivisivelPorCinco = (numero % 5) === 0;
console.log(numero, 'é divisível por cinco?: ', numeroDivisivelPorCinco)
