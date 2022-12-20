/*
Desafio 002
Você tera 3 variaveis, sendo elas:
1 - preço do etanol;
2 - preço da gasolina;
3 - o tipo de combustivel que está no carro;
4 - gasto médio de combustivel do carro por km;
5 - distância em km da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/

const gasolina = 5.45;
const etanol = 4.38;
const kmPorLitros = 10;
const distanciEmKm = 100;

const litrosConsumidos = distanciEmKm/kmPorLitros;

const tipoCombustivel = 'Gasolina';

if (tipoCombustivel === 'Etanol'){
    var valorGasto = litrosConsumidos * etanol;
    console.log('O combustivel usado no carro foi: ' + tipoCombustivel);
    console.log('O valor gasto nesta viagem é de R$: ' + valorGasto.toFixed(2));
}else{
    var valorGasto = litrosConsumidos * gasolina;
    console.log('O combustivel usado no carro foi: ' + tipoCombustivel);
    console.log('O valor gasto nesta viagem é de R$: ' + valorGasto.toFixed(2));
}






