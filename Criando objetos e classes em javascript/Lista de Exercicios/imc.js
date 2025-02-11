class Pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculaImc() {
        const imc = ((this.peso / (this.altura * this.altura))).toFixed(2)
        return imc
    }

    classificaImc() {
        const imc = this.calculaImc()
        if (imc < 18.5) {
            console.log("abaixo do peso")
        } else if (imc >= 18.5 && imc < 25) {
            console.log("peso normal")
        } else if (imc >= 25 && imc < 30) {
            console.log("acima do peso")
        } else if (imc >= 30 && imc <= 40) {
            console.log("obeso")
        } else {
            console.log("obesidade grave")
        }
    }
}

const jose = new Pessoa("José", 70, 1.75)
console.log(`Meu Imc ${jose.calculaImc()}`)
jose.classificaImc()