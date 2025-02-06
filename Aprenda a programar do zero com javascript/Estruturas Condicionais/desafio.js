let gastoMedio = 14;
let distanciaViagem = 400;
let tipoCombustivel = 'etanol';

if (tipoCombustivel.toLowerCase() === "gasolina") {
    let combustivel = 5.79;
    let resultado = (distanciaViagem / gastoMedio) * combustivel;
    console.log("o Valor da viagem é " + resultado.toFixed(2) + " Reais");
} else if (tipoCombustivel.toLowerCase() === "etanol") {
    let combustivel = 3.79;
    let resultado = (distanciaViagem / gastoMedio) * combustivel;
    console.log("o Valor da viagem é " + resultado.toFixed(2) + " Reais");
}