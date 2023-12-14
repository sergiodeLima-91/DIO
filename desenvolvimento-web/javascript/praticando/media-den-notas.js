/** Faça um algorítmo que dada as 3 notas tiradas por um aluno em um semestre da faculdade. Calcule e imprima a sua média e a sua classificação consforme a tabela abaixo.
 * 
 * Média = (nota1 + nota2 + nota3) / 3
 * 
 * Classificação:
 * REPROVADO - média menor que 5;
 * APROVADO - Média acima de 7;
 * RECUPERAÇÃO - Média entre 5 e 7; 
 */

console.log('= = = = = = = = = = = = = = = = ');
console.log('C A L C U L O   D A   M E D I A');
console.log('= = = = = = = = = = = = = = = = ');

let nota1 = 4;
let nota2 = 5;
let nota3 = 2;

let media = (nota1 + nota2 + nota3) / 3;
console.log(('MÉDIA: ', media).toFixed(2))

if (media > 7) {
    console.log('ALUNO APROVADO!');
} else if (media < 5) {
    console.log('ALUNO REPROVADO!');
} else {
    console.log('ALUNO EM RECUPERAÇÃO!'); /** ou if(media >=5 && media <= 7)... */
}