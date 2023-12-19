//Definindo o state, que guardará tudo o que será manipulado dentro do jogo.O STATE ele é um objeto que guarda outros objetos e seus estados.
const state = {
    //Objeto SCORE
    score:{
        playerScore: 0,
        cumputerScore: 0,
        scoreBox: document.getElementById("score_points")
    },
    cardSprites: {
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type"),
    },
    fieldCards: {
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card")
    },
    // No caso do botão não é necessário criar um objeto porque ele tem somente uma funcionalidade.
    actions: {
        button: document.getElementById("next-duel")
    }
};

//Listando as cartas (enumerar) do jogo para recuperar elas depois:
// O recomendado colocar os assests num banco de dados, mas aqui a proposta é simples.

//Colocando o caminho das imagens numa constante para ser chamado por interpolação de strings:
const pathImage = ".src/assets/icons/";
const cardData = [
    // Para cada registro deste vetor, vamos criar um objeto:
    {
        id: 0,
        name: "Blue Eyes White Dragon",
        type: "Paper",
        img:  `${pathImage}dragon.png`,
        //De que carta esta daqui perde ou ganha:
        WinOf: [1],
        LoseOf: [2],
    },

    {
        id: 1,
        name: "Dark Magician",
        type: "Rock",
        img:  `${pathImage}magician.png`,
        //De que carta esta daqui perde ou ganha:
        WinOf: [2],
        LoseOf: [0],
    },

    {
        id: 2,
        name: "Exodia",
        type: "Scissors",
        img:  `${pathImage}exodia.png`,
        //De que carta esta daqui perde ou ganha:
        WinOf: [0],
        LoseOf: [1]
    }
]

// Função para chamar outras funções:
function init(){

    }


