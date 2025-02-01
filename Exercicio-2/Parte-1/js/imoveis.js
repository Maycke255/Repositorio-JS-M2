/* Cadastro de Imóveis
Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:
Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
O menu deve ter a opção de salvar um imóvel.
Para salvar um novo imóvel o programa deve pedir as seguintes informações:
Nome do proprietário.
Quantidade de quartos.
Quantidade de banheiros.
Se possui garagem.
O menu também deve ter a opção de mostrar todos os imóveis salvos. */

//Criando a array para armazenar os objetos:
const estate = []

//Variavel que vai armazenar o menu
let menu;

//Mensagem de inicialização:
alert(`Iniciando o sistema de cadastro de imoveis.`)

do {

    //Loop para iterar a quantidade de imoveis já cadastrados:
    /* Resumo do loop:
    Começamos com a variavel i=0, depois a condição e que enquanto o comprimento da array estate for menor que i o loop vai aparecer
    e a variavel i vai aumentar mais um numero. Depois criamos uma variavel para reatribui-la dentro do loop. No caso dos acessos
    na array, estamos acessando a array na posição i atual e depois acessando o objeto que esta dentro da array ultilizando a
    concatenação "." */
    let listProperty = ""
    for (let i = 0 ; i < estate.length ; i++){
        listProperty += `Imóvel ${i + 1}:\n` +
                `Proprietário: ${estate[i].proprietario}\n` +
                `Quartos: ${estate[i].quartos}\n` +
                `Banheiros: ${estate[i].banheiros}\n` +
                `Garagem: ${estate[i].garagem ? "Sim" : "Não"}\n\n`+
                "--------------------------------------------\n";
    }

    menu = parseFloat(prompt(`Bem vindo ao sistema de cadastro de imoveis.\n`+
        `Cadastros de imoveis por ordem:\n` +
        `${listProperty || "Você ainda não cadastrou nenhum imovel."}\n\n`+
        `O que deseja fazer agora?\n`+
        `1. Adicionar um novo imovel a lista.\n`+
        `2. Excluir um imovel da lista.\n`+
        `3. Sair.`
    ));
    
    switch (menu) {
        case 1:
            const owner = prompt(`Por favor, insira todas as informações solicitadas (As informações adicionadas ficaram em ordem crescente).\n`+
                `Qual o nome do proprietário?`
            );
            const quarters = parseFloat(prompt(`Qual a quantidade de quartos?`));
            const bathrooms = parseFloat(prompt(`Qual a quantidade de banheiros?`));
            const garage = prompt(`Possui garagem? (sim/não)`).toLowerCase();

            if (isNaN(quarters) || quarters <= 0) {
                alert("Número de quartos inválido. Tente novamente.");
                break;
            }
            if (isNaN(bathrooms) || bathrooms <= 0) {
                alert("Número de banheiros inválido. Tente novamente.");
                break;
            }
            if (garage !== "sim" && garage !== "não") {
                alert("Resposta inválida para garagem. Use 'sim' ou 'não'.");
                break;
            }

            const propriety = {
                proprietario: owner,
                quartos: quarters,
                banheiros: bathrooms,
                garagem: garage.toLowerCase() === "sim"
            }

            estate.push(propriety)
            break;

        case 2:
            if (estate.length === 0) {
                alert(`Você ainda não tem nenhum imovel cadastrado para remover. Por favor cadastre um antes.`);
            } else {
                let removeProperty = parseInt(prompt(`Qual imovel da sua lista deseja remover? (digite apenas o número correspondente).\n\n${listProperty}`));
                if (!isNaN(removeProperty) && removeProperty > 0 && removeProperty <= estate.length) {
                    let removedProperty = estate.splice(removeProperty - 1, 1)[0];
                    alert(`O imóvel do proprietário "${removedProperty.proprietario}" foi removido.`);
                } else {
                    alert("Número inválido. Tente novamente.");
                }
            }
            break;

        case 3:
            alert(`Encerrando o programa...`)
            break;

        default:
            alert(`Opção invalida, por favor selecione um número de 1 a 3 listados no menu.`)
            break;
    }

} while (menu !== 3);