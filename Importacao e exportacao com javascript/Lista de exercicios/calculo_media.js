const { gets, print } = require('../Desvendando as funcoes gets e print/funcoes-auxiliares-media')

const media = gets()
print(media)
if (media < 5) {
    print("Reprovado")
} else if (media >= 5 && media < 7) {
    print("Recuperação")
} else {
    print("Aprovado")
}

