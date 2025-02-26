const { gets, print } = require('../Desvendando as funcoes gets e print/funcoes-auxiliares')
let aux = []

for (let index = 0; index < 5; index++) {
    aux.push(gets())

}

print(Math.max(...aux))
