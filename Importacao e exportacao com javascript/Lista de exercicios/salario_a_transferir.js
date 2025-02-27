const { gets, print } = require('../Desvendando as funcoes gets e print/funcoes-auxiliares-salario')

let total = 0

for (let i = 0; i < 1; i++) {
    let valorAtual = gets()
    if (valorAtual > 0 && valorAtual <= 1100) {
        total += valorAtual - (valorAtual * 0.05)
    } else if (valorAtual > 1100 && valorAtual <= 2500) {
        total += valorAtual - (valorAtual * 0.1)
    } else {
        total += valorAtual - (valorAtual * 0.15)
    }
}
total += gets()
print(total)