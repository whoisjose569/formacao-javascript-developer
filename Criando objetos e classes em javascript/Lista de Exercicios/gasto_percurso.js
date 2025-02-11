class Carro {
    constructor(marca, cor, gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calculoGasto(distanciaViagem, precoCombustivel){
        let resultado = ((distanciaViagem / this.gastoMedio) * precoCombustivel).toFixed(2);
        return resultado
    }
}

const gol = new Carro("Vw", "Branco", 12)
resultado = gol.calculoGasto(70,5)
console.log(`O Gasto em Reais da viagem é R$:${resultado}`)