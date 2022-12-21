/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado

Código condição de pagamento

- A vista Débito, recebe 10% de desconto;
- A vista no Dinheiro ou pix, recebe 15% de desconto
- Em duas Vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%

*/

const precoTabela = 5.5;
const tipo = 'sss'; // pix, dinheiro, duasVezes, acimaDuas, outra não possivel
var precoFinal = 0.0;


if (tipo === 'pix'){
    precoFinal = precoTabela - ((precoTabela * 15) / 100);
}else if (tipo === 'dinheiro'){
    precoFinal = precoTabela - ((precoTabela * 15) / 100);
}else if (tipo === 'duasVezes'){
    precoFinal = precoTabela;
}else if(tipo === 'acimaDuas'){
    precoFinal = precoTabela + ((precoTabela * 10) / 100);
}else{
    console.log('tipo não é possivel');
    return 0;
}



console.log('Valor inicial do produto: R$ ' + precoTabela);
console.log('Forma de pagamento: ' + tipo);
console.log('Valor Final do produto: R$ ' + precoFinal.toFixed(2));

