const prompt = require("prompt-sync")();

let condicaoDeParada1 = true
let condicaoDeParada2 = true
while(condicaoDeParada1 === true) {   
  condicaoDeParada2 = true; 
  const nomePersonagem = prompt('> Nome do Personagem: ');
  const acaoEscolhida = prompt('> Ação escolhida: ');
  while(condicaoDeParada2 === true) {
    if (acaoEscolhida === "Atacar" || acaoEscolhida === 'Fugir') {
      console.log(nomePersonagem + " escolheu " + acaoEscolhida + "!")
      condicaoDeParada1 = false;
      condicaoDeParada2 = false;
    } else{
        console.log('Tente novamente')
        condicaoDeParada2 = false
    };
  }
    
};
