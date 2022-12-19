console.log("Atribuindo 10 á constante numero.")

const numero = 12222245;

const NumeroPar = (numero % 2) === 0;

console.log("Resultado:  " + NumeroPar);

if(NumeroPar){
    console.log('par');
}// Caso sendo par, a condição executara o log

if(!NumeroPar){// A exclamação '!' ira inverter a condição 'not'
    console.log('impar');
}//Caso não seja par, a condição ira executar este codigo


// Exemplo utilizando if / else //////////////////////////////////////////////

if(NumeroPar){
    console.log(numero+ ' é um numero par');
}else{
    console.log(numero+ ' é um numero impar');
}

// Exemplo de if/elseif/else

const nDiv5 = (numero % 5) === 0;

if (numero === 0){
    console.log('O numero é invalido.')
}else if (nDiv5)
{
    console.log(numero+ ' é divisivel por 5');
}else{
    console.log(numero+ ' não é divisivel por 5.')
}