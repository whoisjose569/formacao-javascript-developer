const pessoa = {
    nome:"José Vitor",
    idade: 28,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

console.log(pessoa.nome)
console.log(pessoa)

pessoa.altura = 1.70;

console.log(pessoa)

delete pessoa.altura

console.log(pessoa)

pessoa.descrever()

pessoa.descrever = function(){
    console.log(`Meu nome é ${this.nome}`)
}

pessoa.descrever()

console.log(pessoa["nome"])