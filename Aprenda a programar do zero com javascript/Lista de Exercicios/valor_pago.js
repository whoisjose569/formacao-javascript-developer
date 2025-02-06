const valorProduto = 10
const tipoPagamento = 1


if (tipoPagamento === 1) {
    const novoValor = valorProduto - (valorProduto * 0.10)
    console.log(`O produto de R$:${valorProduto} pago a vista no Débito com 10% de desconto passa a custar R$:${novoValor} `)
} else if (tipoPagamento === 2) {
    const novoValor = valorProduto - (valorProduto * 0.15)
    console.log(`O produto de R$:${valorProduto} pago no Dinheiro/Pix com 15% de desconto passa a custar R$:${novoValor} `)
} else if (tipoPagamento === 3) {
    console.log(`O produto em duas vezes custa R$:${valorProduto} `)
} else {
    const novoValor = valorProduto + (valorProduto * 0.10)
    console.log(`O produto de R$:${valorProduto} pago em + de 2 vezes com 10% de juros passa a custar R$:${novoValor} `)
}