//Vamos pegar todas as teclas que estão no nosso documento principal (index.html) e salvá-los numa variável:
// "querySelectorAll" é usado quando vamos pegar mais de um elemento de uma fonte de dados. No caso, queremos pegar todas as tags que tenham a classe piano-keys com subclasse key
const pianoKeys = document.querySelectorAll(".piano-keys .key");

// Para cada uma das teclas executaremos um procedimento:
pianoKeys.forEach((key => {
    console.log(key.dataset.key);
    // Para cada key (valor) crie um evento que fica "escutando" os eventos de click do mouse
    key.addEventListener("click", () => playTune(key.dataset.key)) 
}))