# Map, Filter e Reduce
<br>

[Fonte Geral do Assunto](https://www.youtube.com/watch?v=mgnSSwgTiFU&t=14s)

## **MAP:**
<br>

> Conceito:
- **O que é:** Método
- **O que faz:** Cria nova lista (matriz) a partir dos resultados da chamada de uma função aplicada sobre sobre cada valor da matriz.
- **Esclarecendo:** Usamos `map()` quando queremos executar determinada alteração sobre um conjunto de elementos (valores) numa matriz. Esta alteração é realizada através de uma `function(valorAtual)`. Perceba que o parâmetro `valorAtual` serve como leitos dos valores presentes na lista. Para, exemplos veja [este documento.](./maps.js)
 - Vale destacar que `map()` tem semelhanças com o ForEach ([Fonte](https://www.youtube.com/watch?v=mgnSSwgTiFU&t=14s)).

 <br>

 > Doumentação do JS:
- O método `map()` invoca a função *callback* (função colocada dentro de outra função) passada por argumento para cada elemento do Array e devolve um novo Array como resultado ([Fonte Sobre map()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map) e [Fonte Sobre Callback](https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function#:~:text=Uma%20fun%C3%A7%C3%A3o%20callback%20%C3%A9%20uma,tipo%20de%20rotina%20ou%20a%C3%A7%C3%A3o.))

<br>

## **FILTER:**
<br>

- **O que é:** Método
- **O que faz:** Filtra um array com base num callback passado como argumento para executar determinada rotina e retorna outro array com base no resultado booleano do callback
  - Muito parecido com o método `map()`, mas está mais ligado resultados lógicos booleanos.
  - A callback é o predicado (termo lógico para dizer se algo é verdadeiro ou falso - [Fonte](https://pt.stackoverflow.com/questions/579915/qual-%C3%A9-o-significado-de-predicado-no-contexto-da-computa%C3%A7%C3%A3o))
- **Documentação:** O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida ([Fonte](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)).

<br>

## **REDUCE:**
<br>

- **O que é:** Método
- **O que faz:** Usado para reduzir todos os elementos de um array em um único pela soma deles
- **Documentação:** O método `reduce()` executa uma função **reducer** (fornecida por você) para cada elemento do array, resultando num único valor de retorno ([Fonte](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce))


<br>

## ❓ **Map e Reduce: Quais as Principais Diferenças?**

<br>

|Map | Reduce|
-----|-------|
**Transforma** elementos de um array de acordo com determinado método| **Avalia logicamente** os elementos do array
Retorna uma nova lista com **todos os elementos transformados**| Retorna uma nova lista **somente com os elementos que atendem a determinada condição estabelecida no predicado**

> Resumo:
- O método `map()` **transforma e retorna num novo array** todos os elementos de um array
- O método `filter()` **filtra e retorna num novo array os elementos filtrados**

<br>

**Fonte:** ChatGTP

