// ASSINCRONISMO: Quando queremos fazer algo, mas isso não é executado imediatamente. Por exemplo, quando queremos que o SO leia um arquivo de um disco. Nesse caso, o SO primeiro terá que procurar o arquivo para depois ter que ler ele e entregar novamente o controle para o usuário. Pelo que entendi diz respeito ao processo de software que está fora de controle do usuário.
//PROMISSES: Sistema Operacional: "Prometo que irei ler o arquivo e executar ele para você. Aguarde meu retorno!"
// Como manipular essas PROMESSAS?
//Criando:
new Promise((resolve, reject) => {
    //Se der certo...
    resolve()
    //Se der errado...
    reject()
})

const promessaDeNumeroRandomico = new Promise((resolve, reject) => {
    setTimeout(() => { // Função "setTimeout" estabelece limite de tempo para execução de processo. É o sleep do Python!
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 1000)
}) 

//Acessando os métodos da PROMISSE
promessaDeNumeroRandomico
.then((value) => { // THEN para caso dê tudo certo. É possível colocar mais de um deles!
    console.log(value)
})
.catch((error) => { // CATH caso algo dê errado na execução
    console.error(error)
})
.finally(() => { // FINALLY para encerrar, independente de qual tenha sido o resultado (then e cath)
    console.log('finalizou! Ihuu!')
})

// MANIPULAÇÃO DE ARQUIVOS COM PROMISSES:

const fs = require('fs')

// Lendo um arquivo
const promessaDaLeituraDoArquivo = fs.promises.readFile('tarefas.csv') //Processo assincrono, pois não temos controle sobre esta busca de um arquivo!

promessaDaLeituraDoArquivo.then((arquivo) => {
    console.log(arquivo.toString('utf8'))
})
//Acessando o arquivo via path:
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

promessaDaLeituraDoArquivo.then((arquivo) => {
    console.log('> Acessando arquivo via path:')
    console.log(arquivo.toString('utf8'))
})
//Incluindo tratamento de erros e exceções com THEN:
promessaDaLeituraDoArquivo
.then((arquivo) => arquivo.toString('utf8'))
.then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
.then((linhasSemOCabecalho) => linhasSemOCabecalho.map((linha) => {
    const [nome, feito] = linha.split(';')
    return {
        nome,
        feito: feito.trim() === 'true'
    }
}))
.then((listaTarefas) => console.log(listaTarefas))
.catch((error) => console.log('Deu ruim!', error))
