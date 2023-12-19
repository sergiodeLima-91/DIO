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



// Função para chamar outras funções:
function init(){

    }


