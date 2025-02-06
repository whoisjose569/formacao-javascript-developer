function aplicarDescontoDebito(valorProduto){
    const novoValor = valorProduto - (valorProduto * 0.10)
    return novoValor
}

function aplicarDescontoPixDinheiro(valorProduto){
    const novoValor = valorProduto - (valorProduto * 0.15)
    return novoValor
}

function aplicarJurosParcelado(valorProduto){
    const novoValor = valorProduto + (valorProduto * 0.10)
    return novoValor
}

function calculaNovoPreco(tipoPagamento, valorProduto){
    if (tipoPagamento === 1) {
        novoValor = aplicarDescontoDebito(valorProduto)
        console.log(`O produto de R$:${valorProduto} pago a vista no Débito com 10% de desconto passa a custar R$:${novoValor} `)
    } else if (tipoPagamento === 2) {
        novoValor = aplicarDescontoPixDinheiro(valorProduto)
        console.log(`O produto de R$:${valorProduto} pago no Dinheiro/Pix com 15% de desconto passa a custar R$:${novoValor} `)
    } else if (tipoPagamento === 3) {
        console.log(`O produto em duas vezes custa R$:${valorProduto} `)
    } else {
        novoValor = aplicarJurosParcelado(valorProduto)
        console.log(`O produto de R$:${valorProduto} pago em + de 2 vezes com 10% de juros passa a custar R$:${novoValor} `)
    }
}

(function main(){
    const valorProduto = 10
    const tipoPagamento = 4
    calculaNovoPreco(tipoPagamento, valorProduto)
})();




