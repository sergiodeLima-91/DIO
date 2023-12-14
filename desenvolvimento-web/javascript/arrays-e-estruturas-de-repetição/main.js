// ==================== ENTENDENDO ARRAYS ====================
    // Printando todo o conteúdo do array:
const nomes = ['Maria', 'João', 'José'];
console.log(nomes);

    // Acessando dinamicamente (selecionar particularmente) cada valor do array:
console.log(nomes[0]) // ou [1], ou ainda [2]. A contagem de indices começa em 0 assim como no Python.

    // Adicionando valores ao array. Existem pelo menos duas maneiras de fazer isso. Primeiro o método "push" e depois com a inserção direta mediante acréscimo de um índice mais o valor que irá preencher o índice.
    // Metódo PUSH:
nomes.push('Sérgio');
    // Índice + valor:
nomes[4] = 'Joana';
console.log(nomes);
    //Também é possivel subtituir valores em índices já preenchidos.
    // Método POP remove último valor do array, assim como no Python. Porém, este método, dentro do console.log, também serve para cuspir no terminal o último valor do array.
nomes.pop()
console.log(nomes)
console.log(nomes.pop())
    //Método SHIFT ele retira/printa último valor do array:
nomes.shift();
console.log(nomes);
console.log(nomes.shift());
    // Método LENTH me mostra o tamanho da lista:
console.log('Tamanho do array: ' + nomes.length);

// ==================== ENTENDENDO ESTRUTURAS DE REPETIÇÃO ====================

    // Estrutura de repetição FOR:
 for (let contador = 0; contador < 10; contador++) {
        console.log(contador);
 }
    // Testando numa string:
console.log('');
const nomeCompleto = 'Sergio dos Santoa Lima'
for (let indice = 0; indice < nomeCompleto.length; indice++){
    console.log(nomeCompleto[indice]);
}

    // Como depurar o código?

// ==================== MANIPULAÇÃO DE LISTAS ====================
    //Foreach: (sintaxe reduzida do FOR convencional. Ele é mais lento que o FOR e deve-se tomar cuidado com ele!)
const lista = [1,2,3,4,5,6,7,8,9,10]

lista.forEach((value, index, listRef) => {
console.log(`Valor no índice: ${value}, Índice: ${index}, Toda a lista: ${listRef}`) // Callback = função dentro de outra função.
})
    //Filter:
    // Recebe espécie de função de JULGAMENTO. Filter cria nova lista (nesse caso), devolve uma nova lista contendo só o que foi FILTRADO.
const listaDeNumerosPares = lista.filter((element, index, listRef) => {
    return (element % 2 === 0) // Está filtrando os números da lista e percorrendo para ver quantos deles têm resto da divisão igual a zero.
})

console.log(listaDeNumerosPares)
    //Map:
class Pessoas {
    constructor(name) {
        this.name = name
    }
}
const listaDePessoas = [new Pessoas('Joana'), new Pessoas('José'), new Pessoas('Jiraya'), new Pessoas('Jurema')]

console.log(listaDePessoas)
// E se eu quiser converver esta lista em uma lista de nomes?

const listaNomes = listaDePessoas.map((element) => element.name) // Converta o element no nome dele!

console.log(listaNomes)

// E se eu quisesse converter os nomes em HTML?
const listaHTML = listaDePessoas.map((element) => {
    return `
        <li>
            ${element.name}
        </li>
    `
})

console.log(listaHTML)
    // Reduce:
    //Reduzir a lista num único valor percorrendo cada valor dela.
const somaDeTodosOsNumeros = lista.reduce((previous, current) => {
    return previous + current
})

console.log(somaDeTodosOsNumeros)

    //Join e Combinação de Funções de Manipulação
//"Join" = juntar com um separador e transformar a lista numa string.
const cargosDaEmpresa = ['mecânico', 'gerente','auxiliar administrativo', 'supervisor']
console.log(cargosDaEmpresa.join(' - '))