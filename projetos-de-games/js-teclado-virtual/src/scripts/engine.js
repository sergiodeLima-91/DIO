//Vamos pegar todas as teclas que estão no nosso documento principal (index.html) e salvá-los numa variável:
// "querySelectorAll" é usado quando vamos pegar mais de um elemento de uma fonte de dados. No caso, queremos pegar todas as tags que tenham a classe piano-keys com subclasse key
const pianoKeys = document.querySelectorAll(".piano-keys .key");

//Criando controle de volume (slider):
const volumeSlider = document.querySelector(".volume-slider input");

//Criando mecânica de mostrar/esconder teclas do computador no piano:
const keysCheck = document.querySelector(".keys-check input");

// Teclas mapeadas - Isto é, só serão consideradas para efeito de ativação das teclas do piano as teclas do computador que se encontram dentro deste vetor (A,W,S,E,D,F,T,G,Y,H,U,J,K,O,P e ";", no caso).
let mapedKeys = [];

// Carregando audio do som das teclas
let audio = new  Audio("src/songs/a.wav");

const playTune = (key) => {
    // Configurando o play do audio de acordo com a tecla pressionada
    audio.src = `src/songs/${key}.wav`
    audio.play();
    console.log(mapedKeys);

    //Criando efeito de sombreamento no pressionar da teclas do computador pegando os data-keys.
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    //Adicionando dinamicamente:
    clickedKey.classList.add("active");
    // A cada 150 milissegundos a classe "clickedKey" será removida:
    setTimeout(() => {
        clickedKey.classList.remove("active")
    }, 150); 
};

// Para cada uma das teclas executaremos um procedimento:
pianoKeys.forEach((key) => {
    console.log(key.dataset.key);
    // Para cada key (valor) crie um evento que fica "escutando" os eventos de click do mouse
    key.addEventListener("click", () => 
    playTune(key.dataset.key));
    //Pegando as teclas do computador e inserindo no mapeamento para que somente elas tenham efeito no piano e não o pressionar de outras teclas diferentes não  gere erro no console.
    mapedKeys.push(key.dataset.key) 
})

// Capturando a tecla pressionada pelo usuário:
document.addEventListener("keydown", 
    (e) => {
        // O som só é reproduzido SE a tecla pressionada pelo usuário estiver dentro do vetor "mapedKeys":
        if(mapedKeys.includes(e.key)) {
            // No KeyboardEvent existe uma propriedade chama "key" que recebe o valor digitado, que no caso são as letras digitadas pelo usuário. São elas que queremos capturar., por isso vamos usar esta propriedade.
            playTune(e.key);
        }        
    }
);

const handleVolume = (e) => {
    audio.volume = e.target.value;
};

//Criando evento para o controle do volume (volumeSlider):
//Evento vinculado a sempre que o usuário manipular o slide (que é o input)

const showHideKeys = () => {
    //Diferença do TOGGLE para o ADD: O toggle adiciona a respectiva classe automaticamente caso ela não exista e a remove caso exista. É um efeito de liga/desliga. 
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

volumeSlider.addEventListener("input", handleVolume);

//Criando evento para mostrar as teclas do computador no piano (keysCheck):
//Evento vinculado a sempre que o usuário ativar/desativar o checkbox (que é o input)

keysCheck.addEventListener("click", showHideKeys);
