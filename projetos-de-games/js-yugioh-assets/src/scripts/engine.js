// 1 - Fazer a assinatura dos métodos:"`Primeiro pense na lógica, depois no motor..."

//Definindo o state, que guardará tudo o que será manipulado dentro do jogo.O STATE ele é um objeto que guarda outros objetos e seus estados.
const state = {
    //Objeto SCORE
    score: {
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById("score_points")
    },
    cardSprites: {
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type")
    },
    fieldCards: {
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card")
    },
    playerSides: {
        player1: "player-cards",
        player1BOX: document.querySelector("#player-cards"),
        computer: "computer-cards",
        computerBOX: document.querySelector("#computer-cards")
    },
    // No caso do botão não é necessário criar um objeto porque ele tem somente uma funcionalidade.
    actions: {
        button: document.getElementById("next-duel")
    }
};

//Listando as cartas (enumerar) do jogo para recuperar elas depois:
// O recomendado colocar os assests num banco de dados, mas aqui a proposta é simples.
//Colocando o caminho das imagens numa constante para ser chamado por interpolação de strings:
const pathImages = "./src/assets/icons/";
const cardData = [
    // Para cada registro deste vetor, vamos criar um objeto:
    {
        id: 0,
        name: "Blue Eyes White Dragon",
        type: "Paper",
        img: `${pathImages}dragon.png`,
        WinOf: [1],
        LoseOf: [2],
    },
    {
        id: 1,
        name: "Dark Magician",
        type: "Rock",
        img: `${pathImages}magician.png`,
        WinOf: [2],
        LoseOf: [0],
    },
    {
        id: 2,
        name: "Exodia",
        type: "Scissors",
        img: `${pathImages}exodia.png`,
        WinOf: [0],
        LoseOf: [1],
    }
];

//Criando função que sorteia ID das cartas:
async function getRandomCardId() {
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex].id;
}

//Criando função que sorteia imagem das cartas:
//randomIdCard: De qual ID a imagem será resgatada - fieldSide: Em que lado do campo ela será setada (colocada).
async function createCardImage(IdCard, fieldSide){
    // Do "document" cria elementos. O Browser enxerga as tags como elementos!
    const cardImage = document.createElement("img");
    //Setando atributo height na constante cardImage:
    cardImage.setAttribute("height", "100px");
    // Para colocar as cartas "de costas" no field com outra imagem por cima:
    cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
    // Salvando ID da carta para poder comparar ela com a do adversário:
    cardImage.setAttribute("data-id", IdCard);
    // Para futuras animações nas cartas:
    cardImage.classList.add("card");

    // Criando condcional para liberar seleção das cartas que são DO PLAYER e não do computador:
    if(fieldSide === state.playerSides.player1){
        //Criando animação de apresentar a carta no painel esquerdao quando o mouse estiver encima dela:
        cardImage.addEventListener("mouseover", ()=> {
            drawSelectCard(IdCard);
        });
        
        cardImage.addEventListener("click", () => {
            setCardsField(cardImage.getAttribute("data-id"));
        });
    };
    return cardImage;
};

//Colocando as cartas para comparação no field
async function setCardsField(cardId) {
    // Função que impede a seleção de quaisquer outras cartas quando já existem cartas nos fields
    await removeAllCardsImages();
    //Carta aleatória pro computador:
    let computerCardId =  await getRandomCardId();

    state.fieldCards.player.style.display = "block";
    state.fieldCards.computer.style.display = "block";

    //Setando as imagens:
    state.fieldCards.player.src = cardData[cardId].img;
    state.fieldCards.computer.src = cardData[computerCardId].img;

    //Verificação de quem ganhou:
    let duelResults = await checkDuelResults(cardId, computerCardId);

    // //Função que atualiza a pontuação:
    await updateScore();
    await drawButton();
};

//Criando função que elimina as demais cartas quando uma é selecionada:
async function removeAllCardsImages(){
    //PARA O COMPUTADOR:
    //Recuperar cards na memória por desetruturação:
    let {computerBOX, player1BOX} = state.playerSides;
    //Pegando elementos de imagem:
    let imgElements = computerBOX.querySelectorAll("img");
    // Removendo as imagens por laço de repetição:
    imgElements.forEach((img) => img.remove())

    //PARA O PLAYER:
    //Recuperar cards na memória
       cards = state.playerSides.player1BOX;
       //Pegando elementos de imagem:
       imgElements = player1BOX.querySelectorAll("img");
       // Removendo as imagens por laço de repetição:
       imgElements.forEach((img) => img.remove());
}

//Criando a função para desenhar a carta no painel esquerdo quando o mouse-pointer estiver encima
async function drawSelectCard(index){
    state.cardSprites.avatar.src = cardData[index].img;
    // "innerText: Texto interno"
    state.cardSprites.name.innerText = cardData[index].name;
    state.cardSprites.type.innerText = "Attribute :"  + cardData[index].type;
};

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
    drawCards(5, state.playerSides.player1);
    drawCards(5, state.playerSides.computer);
    }

init();
