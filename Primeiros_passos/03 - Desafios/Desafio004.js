/*
Formula de IMC
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condições de acordo com a tabela abaixo.

IMC em adultos condições:

- Abaixo de 18.5, Abaixo do peso;
- Entre 18.5 e 25 Peso Normal;
- Entre 25 e30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave;


Observações no javascript

'variavelOuConstante'.tofixed(numeroCasasDecimais)
Math.pow(altura, 2); Elevando altura a segunda potência ou 2² neste exemplo 2 x 2 

*/

const peso = 128;
const altura = 1.79;
var imc = peso / Math.pow(altura, 2);    



if (imc < 18.5){
    console.log('IMC: ' + imc.toFixed(1) + ', Abaixo do peso.');
}else if(imc >= 18.5 && imc < 25){
    console.log('IMC: ' + imc.toFixed(1) + ', Peso Normal.');
}else if(imc >= 25 && imc < 30){
    console.log('IMC: ' + imc.toFixed(1) + ', Acima do peso.');
}else if(imc >= 30 && imc < 40){
    console.log('IMC: ' + imc.toFixed(1) + ', Obeso');
}else{
    console.log('IMC: ' + imc.toFixed(1) + ' Obesidade Grave.');
}
 
