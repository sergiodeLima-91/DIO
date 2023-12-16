//Vamos pegar todas as teclas que estão no nosso documento principal (index.html) e salvá-los numa variável:
// "querySelectorAll" é usado quando vamos pegar mais de um elemento de uma fonte de dados. No caso, queremos pegar todas as tags que tenham a classe piano-keys com subclasse key
const pianoKeys = document.querySelectorAll(".piano-keys .key");

// Carregando audio do som das teclas
let audio = new  Audio("src/tunes/a.wav");

const playTune = (key) => {
    // Configurando o play do audio de acordo com a tecla pressionada
    audio.src = `src/tunes/${key}.wav`
    audio.play();
};

// Para cada uma das teclas executaremos um procedimento:
pianoKeys.forEach((key) => {
    console.log(key.dataset.key);
    // Para cada key (valor) crie um evento que fica "escutando" os eventos de click do mouse
    key.addEventListener("click", () => playTune(key.dataset.key)) 
})

// Capturando a tecla pressionada pelo usuário:
document.addEventListener("keydown", 
    (e) => {
        // No KeyboardEvent existe uma propriedade chama "key" que recebe o valor digitado, que no caso são as letras digitadas pelo usuário. São elas que queremos capturar., por isso vamos usar esta propriedade.
        playTune(e.key);
        
    }
);