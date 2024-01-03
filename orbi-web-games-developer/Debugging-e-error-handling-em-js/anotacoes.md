## Tipos de Erros:
<br>

> Erro ECMAScript Error:
- Acontece em tempo de execução
- Algo não foi declarado (variáveis,constantes, etc.)
- Faltou ponto e vírgula

> DOM Exception:
- **Erros relacionados ao código JS sendo rodado numa página web**
- Caracteres inválidos em locais errados
- Erros de estrutura na árvore de elementos

<br>

## Tratando Erros:
<br>

> Throw x Return:
- A contrário do return (que expele como resultado um string comum), o throw retorna uma string com caráter real de erro com todas as suas propriedades

> Try x Catch:
- Verifação de erro com try
- Caso haja o erro, ele é pego (catch) e retornado
- Catch também pode ser usado com throw para ser retornado com caráter e propriedades de erro.

> Finally:
- Instrução chamada independente da existência de erro ou não no código!
- É executado de qualquer forma!

<br>

## Criando Erros
<br>

> Objeto Error:
- Parêmtros: Mensagem (message)- Nome do Arquivo (fileName) - Número da Linha (lineNumber). Todos os parâmetros são opcionais
- FileName e LineNumber não são padrão
-  Erro pode ter um nome com MeuErro.name = "mensagem"

<br>

## Atividade: Validação de Erros por Tipo
<br>

O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

- Crie uma função que recebe um array e um número
- Realize as seguintes validações:
  - Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
  - Se o array não for do tipo 'object', lance um erro do tipo TypeError 
  - Se o número não for do tipo 'number', lance um erro do tipo TypeError
  - Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
  - Utilize a declaração try...catch
  - Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof