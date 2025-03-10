function valores (a, b, operacao){
    return operacao(a, b)
}

let soma = function (x, y){
    return x + y
}

let multiplicacao = function(x, y){
    return x * y
}

console.log(valores(19, 12, multiplicacao))
console.log(valores(10, 5, soma))

function saudacao (seuNome, nome){
    return seuNome(nome)
}

let dizerOla = function(nome){
    return console.log("Olá, meu nome e " + nome + "!")
}

console.log(saudacao(dizerOla, "Maycke"))

let array = [
    "Maça", "Banana", "Pera", "uva"
]

let carrinho = []

const frutas = array.map(function(fruta){
    return fruta
})

console.log(frutas)

let cidades = [
    {cidade: "Taiobeiras", pontoTuristico: "Praça da Matriz, Praça de esportes"}
]

cidades.forEach(function (city, i){
    let lista = "Cidade visitada de Maycke:\n"
    lista += `${(i + 1)}\n`+
            `Cidade: ${city.cidade}\n`+
            `Pontos Turisticos: ${city.pontoTuristico}`;
    console.log(lista)
})

function exibirLista(){
    let lista = "Cidade visitada de Maycke:\n"
    for (let i = 0;i < cidades.length; i++){
        lista += `${(i + 1)}\n`+
                `Cidadezinhas: ${cidades[i].cidade}\n`+
                `PT: ${cidades[i].pontoTuristico}`
    }
    return console.log(lista)
}

exibirLista()