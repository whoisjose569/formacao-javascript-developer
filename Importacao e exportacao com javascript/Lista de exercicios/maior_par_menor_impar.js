const { gets, print } = require('../Desvendando as funcoes gets e print/funcoes-auxiliares')

const quantidadeNumeros = gets()

let maiorNumero = 0
let menorNumero = 999

for (let i = 0; i < quantidadeNumeros; i++) {
    let numeroAtual = gets()
    if (numeroAtual > maiorNumero && numeroAtual % 2 === 0) {
        maiorNumero = numeroAtual
    }
    if (numeroAtual < menorNumero && numeroAtual % 2 === 1) {
        menorNumero = numeroAtual
    }
}

print(maiorNumero)
print(menorNumero)