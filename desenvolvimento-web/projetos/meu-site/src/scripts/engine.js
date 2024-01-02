function mostrarSaudacao() {
    var nome = "Sérgio";
    var mensagemSaudacao = document.getElementById("mensagemSaudacao");
    mensagemSaudacao.classList.add("saudacao","fadeIn");    
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

var empurre = document.getElementById("imagem");

empurre.addEventListener("click", function() {
  this.classList.toggle("empurre")
}); 
  