/** Calcule o preço de um produto considerando o valor de etiqueta e a forma de pagamento. 
 * 
 * > À vista (Débito) - 10% off;
 * > À vista (Dinheiro ou PIX) - 15% off;
 * > 2x - preço normal de etiqueta sem juros.
 * > 3x ou mais - preço de etiqueta + 10% de juros.
*/


function CalculeOPrecoFinal(valor, forma){
    if (forma === 'debito'){
        return valorAPagar = valor - ((valor * 10) / 100);
    } else if (forma === 'dinheiro' || forma === 'PIX'){
        return  valorAPagar = valor - ((valor * 15) / 100);
    } else if (forma === 2){
        return  valorAPagar = valor / forma;
    } else{
        return valorAPagar = (valor / forma) + ((valor * 10) / 100);
    }
}

function MostreOPrecoFinal(valor, forma){
    if (forma === 'debito' || forma === 'dinheiro' || forma === 'PIX'){
        return 'Você vai pagar R$ ' + (valorAPagar).toFixed(2) + ' no ' + forma
    } else if (forma === 2 || forma >= 3){
        return 'Você vai pagar R$ ' + (valor + (valor * 0.1)).toFixed(2) + ' em ' + forma + 'x de R$ ' + (valorAPagar).toFixed(2);
    };
};

(function main(){
    const valorDeEtiqueta = 30;
    const formaDePagto = 5;
    CalculeOPrecoFinal(valorDeEtiqueta, formaDePagto);
    console.log(MostreOPrecoFinal(valorDeEtiqueta, formaDePagto));
})()

