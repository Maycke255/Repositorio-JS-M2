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
os pontos turisticos. em seguida ela retorna a propria list, usamos o .join também, o .join junta
toda uma array em uma unica string separando as por um delimitador ou separador, nesse caso ele
pede que quando encontrar um item separado por virgula dentro da array "Maça", "banana", 
ele vai junta-los e separa-los por uma virgula e espaço: "Maça, Banana"  */
function citiesList (){
    if (cities.length === 0){
        return `Nenhuma cidade ou ponto turistico visitado ainda.`
    } else {
        let list = "Cidades visitadas:\n"
        for(let i = 0; i < cities.length; i++){
            list += `Cidade: ${(i+1)}\n`+
                    `Cidade: ${cities[i].cityVisited}\n`+
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
        const touristPointvisited = prompt(`Quais pontos turísticos você visitou nessa viagem? Separe-os por vírgula, Ex: Museu, Igreja, Caverna.`)
                            .split(",") // Transforma em array
                            .map(point => point.trim()); // Remove espaços extras

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
            alert(`A cidade ${cities[remove].cityVisited} foi removida`)
            cities.splice(remove, 1)
        } else {
            alert(`Número invalido, tente novamente.`)
        }
    }
}

/* o mais complicado de todos, remover os pontos turisticos, primeiro colocamos uma verificação, ela verifica se a pontos turisticos para remover,
caso não haja, o valor da array cities for igual a 0, a função vai parar e dar um return, em seguida fazemos a mesma coisa do removeCity, diminuimos
o valor do index -1, no caso - o valor que o usuario digitar. Em seguida, fazemos a verificação para o programa funcionar de fato, se o número que o usuario digitar
for maior ou igual a 0 o programa funciona E também o número que o usuario digitar precisa ser menor que a lista presente dentro da array, no caso a quantidade
de cidades ou pontos turisticos presentes, em seguida reatribuimos a array cities com o objeto selecionado pelo usuario.
(Ex: let frutas = ["maça", "pera", "abacate", "romã"]
let frutasNaCesta = frutas[1]
console.log(frutasNaCesta) "pera"
OU ->
let pertgunta = prompt("Qual fruta você quer retirar da sua cesta?").tolowerCase()
let retirada = frutas[pera] -> Reatribuimos a array frutas para uma variável de string normal, com a fruta selecionada pelo usuario
console.log(retirada) "pera")
Com isso fazemos mais uma verificação, acessamos a variável city que contém a array cities com o número que o usuario escolheu, acessamos o objeto dos pontos turisticos
dentro dela, em seguida verificamos se possui pontos turisticos, caso não possua, o comprimento for igual a 0, a função para e exibe um alerta dizendo que a cidade
visitada a qual esta interligada, não possui pontos turisticos para serem removidos.  */
function removeTouristPoint() {
    if (cities.length === 0) {
        alert("Não há cidades ou pontos turísticos para remover.");
        return;
    }

    let cityIndex = parseInt(prompt(`Digite o número da cidade onde deseja remover um ponto turístico:\n\n` +
                                    citiesList())) - 1;

    if (cityIndex >= 0 && cityIndex < cities.length) {
        let city = cities[cityIndex];

        if (city.touristPoint.length === 0) {
            alert(`A cidade ${city.cityVisited} não possui pontos turísticos cadastrados.`);
            return;
        }

        let pointList = city.touristPoint.map((point, i) => `${i + 1}. ${point}`).join("\n");
        let pointIndex = parseInt(prompt(`Escolha o número do ponto turístico que deseja remover:\n\n${pointList}`)) - 1;

        if (pointIndex >= 0 && pointIndex < city.touristPoint.length) {
            let removedPoint = city.touristPoint[pointIndex]; // Armazena o nome antes de remover
            city.touristPoint.splice(pointIndex, 1);
            alert(`O ponto turístico "${removedPoint}" foi removido.`);
        } else {
            alert("Número inválido, tente novamente.");
        }
    } else {
        alert("Número inválido, tente novamente.");
    }
}
