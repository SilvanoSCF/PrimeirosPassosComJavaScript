/*
Desafio 3

Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade,
 calcule e imprima a média e a sua classificação conforme a tabela abaixo

Media = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovado;
- Média entre 5 e 7 recuperação;
- Média acima de 7, passou de semestre;

*/

const nota1 = 9.5;
const nota2 = 8.3;
const nota3 = 4.9;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5){
    console.log('Aluno reprovado com média: ' + media);
}else if (media > 5 && media < 7){
    console.log('Aluno está em recuperação com média: ' + media);
}else{
    console.log('Aluno Passou de semestre com média: ' + media);
}