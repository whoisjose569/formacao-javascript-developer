const alunos = ['Joao', 'Vitor', 'Marina']

console.log(alunos)
alunos.push('Renan')
console.log(alunos)

alunos.pop() //Retira o ultimo
alunos.shift() //Retira o primeiro
console.log(alunos)

const notas = [];

notas.push(5)
notas.push(4)
notas.push(8)
notas.push(9)
console.log(notas)

let soma = 0

for (let i = 0; i < notas.length; i++) {
    soma += notas[i]
    
}

const media = soma / notas.length

console.log(media)


