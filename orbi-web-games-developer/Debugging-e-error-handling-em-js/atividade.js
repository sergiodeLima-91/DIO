// Validação de Erros por Tipo:

const meuArray = [5 ,3 ,4 ,6 ,9];
const tamanhoArray = meuArray.length;
const number = 4

function validacaoDeArray(num) {
    console.log(num)
    console.log(tamanhoArray);
    try {
        if (num === meuArray.length) {
            console.log('É igual!');
        };
    
    } catch{
        console.log('Não é igual!');
    };
};

validacaoDeArray(number);