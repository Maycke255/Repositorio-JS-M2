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