/*
Faça um programa para calcular o valor de uma viagem
Você tera 3 variaveis, sando elas:
Preco_combustivel
Gasto _medio
Distancia_percorrida
*/

console.log('Gastos da viagem');
const  precoCombustivel= 5.79;  //Formato camelCase
const distanciaPercorrida= 100;
const quilometrosPorLitro= 13;

const gastosDaViagem = (distanciaPercorrida / quilometrosPorLitro) * precoCombustivel;

console.log(gastosDaViagem.toFixed(2)); //toFixed Converte nosso valor em texto.


