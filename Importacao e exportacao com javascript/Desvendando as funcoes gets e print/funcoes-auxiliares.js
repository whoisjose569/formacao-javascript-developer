const entradas = [5, 50, 7, 98, 23, 99];
let i = 0;

function gets() {

    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto)
}

module.exports = { gets, print };