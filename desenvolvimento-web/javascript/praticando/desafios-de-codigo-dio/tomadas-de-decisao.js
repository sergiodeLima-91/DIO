const prompt = require("prompt-sync")(); // Este método é um método INPUT para o terminal, uma vez que 
                                         //naturalmente o JS do Node não tem esta funcionalidade, a não 
                                         //ser que seja usada em conjunto com um navegador

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

// ====== Solução aprovada pela DIO ======:

/*let condicaoDeParada1 = true;
let condicaoDeParada2 = true;

while(condicaoDeParada1 === true) {   
  condicaoDeParada2 = true; 
  const nomePersonagem = gets();
  const acaoEscolhida = gets();
  while(condicaoDeParada2 === true) {
    if (acaoEscolhida === "Atacar" || acaoEscolhida === 'Fugir') {
      print(nomePersonagem + " escolheu " + acaoEscolhida + "!")
      condicaoDeParada1 = false;
      condicaoDeParada2 = false;
    } else{
        print('Tente novamente')
        condicaoDeParada1 = false;
        condicaoDeParada2 = false;
    };
  }
    
}; */
