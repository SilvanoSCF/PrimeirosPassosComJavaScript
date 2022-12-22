function teste() {/// Imprimir o nome teste
    console.log('teste');
}
teste();

function myname(nome){ // Imprime o valor solicitado pela função
    console.log(nome);
}
myname('Silvano');

function quadrado(valor){ // Calcula a segunda potencia do valor
    return valor * valor;
}
console.log(quadrado(10));

function incremetarJuros(valor, percentualJuros){ // Calculo de juros sobre valor
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}

console.log(incremetarJuros(100, 3));







