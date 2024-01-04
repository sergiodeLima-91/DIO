// Validação de Erros por Tipo:

function validaArray(array, numero) {
    
    try {
        if (!array && !numero) throw new ReferenceError('Digite os valores antes de chamar a função!')

        if (typeof array !== 'object') throw new TypeError("Arrray precisa ser do tipo objeto!")

        if (typeof numero !== 'number') throw new TypeError("O número precisa ser do tipo number!")

        if (array.length !== numero) throw new RangeError('Array e número com tamanhos diferentes!')
        
        // Caso oarray seja válido, ele será retornado:
        return array

    } catch (error) {
        // Filtrando erros com o instanceof
        // Se o parâmetro erro do catch é uma instância de ReferenceError...
        if (error instanceof ReferenceError) {
            console.log(`${error.name}: ${error.message}`);
        } else if (error instanceof TypeError) {
            console.log(`${error.name}: ${error.message}`);
        } else if (error instanceof RangeError) {
            console.log(`${error.name}: ${error.message}`)
        } else {
            console.log('Tipo de erro inesoerado: ' + error)
        } 
        
    }

}

console.log(validaArray([3,2,4], 3));
