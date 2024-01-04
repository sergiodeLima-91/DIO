## Async e Wayt
<br>

 > Assíncrono x Síncrono:
 - **Assíncrono:** Que não se efetiva ao mesmo tempo. Uma atividade pode ser feita em um tempo diferente da outra e não exatamente no mesmo tempo.
 - **O JS roda de maneira síncrona por padrão (uma coisa depois da outra).**

 <br>

 ![](./imagens/imagem-01.png)

 > Promisses:
 - Objeto de processamento assícrono
 - Iniclamente, seu valor é desconhecido
 - Pode ser resolvida ou rejeitada
 - É literalmente uma promessa

 > Estados da Promise:
 - **Pending:** Pendente. A promise foi criada e a função assíncrona á qual ela está associada não foi concluída ou falhou ainda. Espécie de estado intermediário de expectação 
 ([Fonte](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous/Promises)).
 - **Fulfilled:** Completado
 - **Rejected:** Rejeitado (deu errado)
 
<br>

 > Estrutura da Promisse:
 <br>

![](./imagens/imagem-02.png)

- Depois de dois segundos, a myPromise apresentará como resultado bem sucedido(**resolve**) a mensagem 'Resolvida' no console

<br>

> Manipulação / Encadeamento de Promises:
<br>

![](./imagens/imagem-03.png)

- Com o **THEN** e o **AWAIT**, o conteúdo  da myPromise só será executado caso a promessa seja bem sucedida
- O **RESULT** representa o resultado da myPromise sendo pego para realizar determinada operação
- O THEN pode aparecer mais de uma vez dependente da quantidade de operações que se deseja fazer
- **CATCH** aqui serve para mostrar uma mensagem de erro caso a promise apresente como resultado o **Rejected**.
- Caso a promisse seja bem sucedida (**resolve**), a mensagem 'Resolvida' passará pelo primeiro THEN, que concatenará a mesma com outra a string ' passando pelo then'
- Em seguida, com os resultados acumulados, a mesma mensagem seguirá agora para o segundo THEN que irá concatenar mais uma string, isto é, a ' e agora acabou!'

> Async x Await:
- Necessário usar estas duas palavras para usar funções assíncronas!
- **Necessário Async para usar o await**

<br>

> Try e Catch nas Promisses:

<br>

![](./imagens/imagem-04.png)