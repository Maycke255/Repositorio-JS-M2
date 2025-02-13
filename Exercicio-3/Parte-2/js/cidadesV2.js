/* Escreva um programa em javascript que peça o nome de um turista e então pergunte 
se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade 
e o armazene em uma variável, e então continue perguntando se o turista visitou 
alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o 
nome do turista, quantas e quais cidades ele visitou. */

let cities = [] // array para armazenar as cidades e os pontos turisticos.

let menu; // Variavel do menu fora do escpo da função para ser sempre acessivel.
let touristName; // Variavel para armazenar o nome do turista, fora de uma função, para sempre ser acessado.

// Função para o usuario digitar o seu nome
function tourist (){
    touristName = prompt(`Bem vindo ao programa de adicionar cidades.\n`+
                    `Por favor, digite o seu nome`
    )
}

/* Função para percorrer a array, caso a array não tenha nada a função da um return e para,
caso tenha, ela percorre usando o for, nas cidades usamos o cities para acessar a array,
em seguida acessamos o objeto que existe dentro da array que a cityVisited, a mesma coisa para
os pontos turisticos. em seguida ela retorna a propria list */
function citiesList (){
    if (cities.length === 0){
        return `Nenhuma cidade ou ponto turistico visitado ainda.`
    } else {
        let list = "Cidades visitadas:\n"
        for(let i = 0; i < cities.length; i++){
            list += `Cidade: ${(i+1)}\n`+
                    `Cidades: ${cities[i].cityVisited}\n`+
                    `Pontos turisticos visitados na cidade: ${cities[i].touristPoint.join(", ")}`+
                    `--------------------------\n`;
        }
    return list;
    }
}

/* Função para exibir o menu que vamos exibir dentro do loop do while, chamamos a váriavel list
dentro dessa função e em seguida colocamos ela dentro do menu, podemos criar a variavel
chamada list novamente mesmo ela já estando criada, por que ela so existe dentro da função
citiesList, então o correto e criar a mesma variavel e chama-la na variavel */
function menuDisplay () {
    let list = citiesList()
    menu = parseFloat(prompt(`Cidades visitadas de ${touristName}:\n`+
                            `${list}\n`+
                            `1. Adicionar uma cidade visitada e um ponto turistico.\n`+
                            `2. Remover uma cidade.\n`+
                            `3. Remover um ponto turistico.\n`+
                            `4. Sair.`
    ))
    return menu
}

function addCity () {
    let cityYes = "sim"

    while (cityYes === "sim") {
        const cityAdd = prompt(`Qual cidade você visitou nessa viajem?`)
        const touristPointvisited = prompt(`Quais pontos turisticos você visitou nessa viajem? Separe-os por virgula, Ex: Museu, Igreja, Caverna.\n` +
                                            `(Caso não tenha visitado, escreva apenas nenhum).`)

        const addCities = {
            cityVisited: cityAdd,
            touristPoint: touristPointvisited 
        };

        cities.push(addCities);

        cityYes = prompt(`Você visitou mais alguma cidade na sua viajem? (sim/não)`).toLowerCase()
    }
}

/* Essa parte foi uma das mais complicadas, e a função para remover a cidade, se não houver
nada dentro da array, se o comprimento for 0, ela vai exibir apenas um alert e encerrar, caso
tenha, ela vai pedir o número para remover no caso o index que representa aquela cidade. Ex:
Se o usuario disser que quer remover a primeira cidade, no caso o primeiro index, a pessoa não
vai escolher o número zero, por que nossa contagem não começa em 0, 0 e apenas para listas e maquinas
então se o usuario digitar 1 ele vai querer remover o primeiro, então já que o primeiro começa 
em 0, podemos subtrair o prompt do usuario por 1, ou seja, 1 - 0 = 0, removeu o primeiro assim 
como desejado, caso ele queira remover a 2 cidade, vai ser 1 - 2 = 1, vai remover a segunda. Para
remover utilizamos o .splice, que funciona... */
function removeCity () {
    if (cities.length === 0) {
        alert(`Você não tem nenhuma cidade visitada ainda, por favor adicione uma para poder remover`);
        return;
    } else {
        let remove = parseFloat(prompt(`Digite o número da cidade pelo número indicativo no inicio.\n${citiesList()}`)) - 1;
        if (remove >= 0 && remove < cities.length) {
            cities.splice(remove, 1)
            alert(`A cidade ${cities[remove].cityVisited} foi removida`)
        } else {
            alert(`Número invalido, tente novamente.`)
        }
    }
}