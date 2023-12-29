function mostrarSaudacao() {
    var nome = "Sérgio";
    var mensagemSaudacao = document.getElementById("mensagemSaudacao");
    mensagemSaudacao.innerHTML = "Olá, meu nome é " + nome + "! Prazer em conhecê-lo!<br><br> Nasci em Campina Grande, na Paraíba. Sou alguém que deseja sempre crescer intelectualmente em todos os ambitos da vida. Para poder manter a mente sempre ativa, procuro manter uma rotina de estudos diária tanto na área de tecnologia quanto em âmbito religioso por ser cristão evangélico. Desejo migrar de profissão saindo de humanas para a exatas por meio da tecnologia da informação no mundo da programação. Sou formado em Análise e Desenvolvimento de Sistemas pela Universidade UNOPAR e sigo a carreira em desenvolvimento de jogos."
    mensagemSaudacao.classList.add("saudacao","fadeIn")
  }

var timeoutId;

  function exibirMensagemPequena() {
    timeoutId = setTimeout(function(){
    var balaoMensagem = document.getElementById("balaoMensagem");
    balaoMensagem.style.display = "block";
    }, 100);
    
  }

  function ocultarMensagemPequena() {
    clearTimeout(timeoutId);
    var balaoMensagem = document.getElementById("balaoMensagem");
    balaoMensagem.style.display = "none";
  };
  