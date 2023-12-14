//Async e Await:
// Açucar sintático: forma diferente de escrever algo
// Async e Await são outras formas de escrever o THEN, o CATH e o FINALLY com mais estilo.

const fs = require('fs')
const { connect } = require('http2')
const path = require('path')

// Lendo um arquivo
const filePath = path.resolve(__dirname, 'tarefas.csv') 

async function buscarArquivo() {
    try{
        const arquivo = await fs.promises.readFile(filePath) // AWAIT torna a PROMISSE mais procedural (programada), isto é, de forma síncrona!
    const textoDoArquivo = arquivo.toString('utf8')
    console.log(textoDoArquivo)
    }catch (error){
        console.error(error)
    } finally {
        console.log('FIM!')
    }
    
}

buscarArquivo()
