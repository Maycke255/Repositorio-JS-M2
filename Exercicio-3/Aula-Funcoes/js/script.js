function calcularMedia(a, b) {
    const media = (a + b) / 2
    return media
}

const resultadoMedia = calcularMedia(7, 2)
console.log(resultadoMedia)

function objeto (nome = "Digite um nome", preco = "não definido", quantidade = 0){
    const produto = {
        nome,
        preco,
        quantidade: 10
    }
    return produto
}

const venda = objeto("Placa de video 5090 TI", 1050, 3)

console.log(venda)
