const meuErro = new Error('Mensagem Inválida!');

throw meuErro;


//Erro com nome
const MeuErro2 = new Error('Outra Mensagem Inválida');
MeuErro2.name = 'InvalidMessage'; // InvalidMessage: Outra Mensagem Inválida

throw MeuErro2;


// Mensagens para testar via console.log:
// > MeuErro2.name > "InvalidMessage"
// > MeuErro.stack > "InvalidMessage: Mensagem Inválida
// at <anonymous>:3:17" (linha e coluna)
// MeuErro > InvalidMessage: Mensagem Inválida at <anonymous>:3:17