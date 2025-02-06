function calcularMedia(a, b) {
    const media = (a + b) / 2
    return media
}

const resultadoMedia = calcularMedia(7, 2)
// console.log(resultadoMedia)

function objeto (nome = "Digite um nome", preco = "não definido", quantidade = 0){
    const produto = {
        nome,
        preco,
        quantidade: 10
    }
    return produto
}

const venda = objeto("Placa de video 5090 TI", 1050, 3)

// console.log(venda)



function soma (numero1, numero2){
    return numero1 + numero2
}

const resultado = soma(12, 12)

// console.log(resultado)

function areaRetangular (base, altura){
    return base * altura
}

// console.log(areaRetangular(12, 4))

function maiorIdade(valor) {
    if (valor >= 18) {
        console.log("Você de maior.")
        return "Você tem mais de 18 anos."
        let inacessivel = console.log("Valor nuca lido.")
    } else {
        console.log("Você e de menor.")
        return "Você ainda tem menor de 18 anos."
    }
}

// console.log(maiorIdade(34))
// console.log(maiorIdade(15))

function multiplicacaoDe2 (youNumber){
    console.log(`Resultado: ${youNumber * 2}`)
}

multiplicacaoDe2(30)
