/* Escreva um programa em javascript que peça o nome de um turista e então pergunte 
se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade 
e o armazene em uma variável, e então continue perguntando se o turista visitou 
alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o 
nome do turista, quantas e quais cidades ele visitou. */

let cities = [
    [], // Array para as cidades
    [] // Array para os pontos turisticos
]

let menu;
let touristName;

function tourist (){
    touristName = prompt(`Bem vindo ao programa de adicionar cidades.\n`+
                    `Por favor, digite o seu nome`
    )
}

function citiesList (){
    if (cities.length === 0){
        return `Nenhuma cidade ou ponto turistico visitado ainda.`
    } else {
        let list = "Cidades visitadas:\n"
        for(let i = 0; i < cities.length; i++){
            list += `Cidade: ${(i+1)}\n`+
                    `Cidades: ${cities[i].cityVisited}\n`+
                    `Ponto turistico: ${cities[i].touristPoint.join(", ")}`+
                    `--------------------------\n`;
        }
    return list;
    }
}

function menuDisplay () {
    let list = citiesList()
    menu = parseFloat(prompt(`Cidades visitadas:\n`+
                            `${list}\n`
    ))
}
