const peso = 80;
const altura = 1.8;
const imc = peso / (altura * altura);

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