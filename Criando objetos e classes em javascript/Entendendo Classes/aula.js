class Pessoa {
    anoNascimento;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2025 - idade
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`)
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} tem a mesma idade ${p2.nome}`)
    }
}

const vitor = new Pessoa("José Vitor", 28);
const jove = new Pessoa("Joventino Pereira", 32)

compararPessoas(vitor, jove)