// 1 - Fazer a assinatura dos métodos:"`Primeiro pense na lógica, depois no motor..."

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

//Criando constante de enumeração para colocar as imagens das cartas nos fields:
const playerSides = {
    player1: "player-field-card",
    computer: "computer-field-card"    
}

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
];

//Criando a função que sorteia as cartas:
// cardNumbers = quantidade de cartas - FieldSide = Para quem o sorteio é realizado
async function drawCards(cardNumbers, fieldSide){
    for(let i = 0; i < cardNumbers; i++) {
        // Constante randomIdCard vai receber o id de uma das cartas de forma aleatória:
        const randomIdCard = await getRandomCardId();
        //Precisamos não somente do id da carta, mas sobretudo da imagem dela. Vamos coolocá-la numa constante:
        const cardImage = await createCardImage(randomIdCard, fieldSide);
        //Agora temos que colocar a imagem correspodente no local correto de acordo com o jogador:
        document.getElementById(fieldSide).appendChild(cardImage);
    }
}

// Função para chamar outras funções:
function init(){
    //Sorteando as cartas para ambos os jogadores:
    drawCards(5, playerSides.player1);
    drawCards(5, playerSides.computer);
    }


