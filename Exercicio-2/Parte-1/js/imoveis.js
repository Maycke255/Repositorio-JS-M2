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

// Criando a array para armazenar os objetos:
const estate = [];

// Variável que vai armazenar a escolha do usuário no menu:
let menu;

// Mensagem de inicialização:
alert(`Iniciando o sistema de cadastro de imoveis.`);

// Loop do menu interativo:
do {
    // Loop para iterar a quantidade de imóveis já cadastrados:
    /* Resumo do loop:
    Começamos com a variável i = 0, depois a condição é que enquanto o comprimento da array `estate` for maior que i, o loop vai continuar.
    A cada iteração, a variável i aumenta em 1. Dentro do loop, criamos uma string (`listProperty`) que armazena as informações de cada imóvel. */
    let listProperty = "";
    for (let i = 0; i < estate.length; i++) {
        listProperty += `Imóvel ${i + 1}:\n` +
                        `Proprietário: ${estate[i].proprietario}\n` +
                        `Quartos: ${estate[i].quartos}\n` +
                        `Banheiros: ${estate[i].banheiros}\n` +
                        `Garagem: ${estate[i].garagem ? "Sim" : "Não"}\n\n` +
                        "--------------------------------------------\n";
    }

    /* Aqui é o menu interativo, onde o número que o usuário digitar vai ser transformado de uma
    string para um número inteiro. Caso a array `estate` esteja vazia, irá aparecer a mensagem
    "Você ainda não cadastrou nenhum imóvel.". Caso contrário, irá aparecer a lista de imóveis.
    O loop continuará até que o usuário digite a opção 3 (Sair). */
    menu = parseFloat(prompt(`Bem vindo ao sistema de cadastro de imoveis.\n` +
                            `Cadastros de imoveis por ordem:\n` +
                            `${listProperty || "Você ainda não cadastrou nenhum imovel."}\n\n` +
                            `O que deseja fazer agora?\n` +
                            `1. Adicionar um novo imovel a lista.\n` +
                            `2. Excluir um imovel da lista.\n` +
                            `3. Sair.`
    ));

    // Aqui as interações das opções do menu:
    switch (menu) {
        /* No primeiro case, assim que o usuário digitar o número 1, as seguintes perguntas
        irão aparecer para o usuário, e também teremos algumas verificações. */
        case 1:
            const owner = prompt(`Por favor, insira todas as informações solicitadas (As informações adicionadas ficaram em ordem crescente).\n` +
                                `Qual o nome do proprietário?`);
            const quarters = parseFloat(prompt(`Qual a quantidade de quartos?`));
            const bathrooms = parseFloat(prompt(`Qual a quantidade de banheiros?`));
            const garage = prompt(`Possui garagem? (sim/não)`).toLowerCase();

            /* Primeira verificação: caso o usuário digite algo que não seja um número válido nos
            quartos ou um número menor ou igual a 0, irá aparecer esse alert. O verificador `||`
            funciona se pelo menos uma das verificações for verdadeira. */
            if (isNaN(quarters) || quarters <= 0) {
                alert("Número de quartos inválido. Tente novamente.");
                break;
            }

            /* Segunda verificação: caso o usuário digite algo que não seja um número válido nos
            banheiros ou um número menor ou igual a 0, irá aparecer esse alert. O verificador `||`
            funciona se pelo menos uma das verificações for verdadeira. */
            if (isNaN(bathrooms) || bathrooms <= 0) {
                alert("Número de banheiros inválido. Tente novamente.");
                break;
            }

            /* Terceira verificação: caso o usuário digite algo que seja diferente da string "sim"
            ou "não", irá aparecer esse alert. Diferente do `||`, o `&&` funciona apenas se as duas
            condições forem verdadeiras. */
            if (garage !== "sim" && garage !== "não") {
                alert("Resposta inválida para garagem. Use 'sim' ou 'não'.");
                break;
            }

            /* Aqui criamos um objeto (`propriety`) com as informações coletadas e adicionamos
            esse objeto ao array `estate` usando o método `push`. */
            const propriety = {
                proprietario: owner,
                quartos: quarters,
                banheiros: bathrooms,
                garagem: garage.toLowerCase() === "sim"
            };

            estate.push(propriety);
        break;

        /* No segundo case, o usuário pode remover um imóvel da lista. Primeiro, verificamos se
        há imóveis cadastrados. Caso contrário, exibimos uma mensagem informando que não há
        imóveis para remover. */
        case 2:
            if (estate.length === 0) {
                alert(`Você ainda não tem nenhum imovel cadastrado para remover. Por favor cadastre um antes.`);
            } else {
                /* Caso haja imóveis, pedimos ao usuário que digite o número correspondente ao
                imóvel que deseja remover. */
                let removeProperty = parseInt(prompt(`Qual imovel da sua lista deseja remover? (digite apenas o número correspondente).\n\n${listProperty}`));

                /* Verificamos se o número digitado é válido (ou seja, se é um número, se é maior
                que 0 e se é menor ou igual ao número de imóveis cadastrados). */
                if (!isNaN(removeProperty) && removeProperty > 0 && removeProperty <= estate.length) {
                    /* Se for válido, usamos o método `splice` para remover o imóvel do array.
                    O `splice` retorna um array com os elementos removidos, então pegamos o
                    primeiro elemento desse array (`[0]`) para exibir o nome do proprietário
                    do imóvel removido. */
                    let removedProperty = estate.splice(removeProperty - 1, 1)[0];
                    alert(`O imóvel do proprietário "${removedProperty.proprietario}" foi removido.`);
                } else {
                    alert("Número inválido. Tente novamente.");
                }
            }
        break;

        /* No terceiro case, o usuário pode sair do programa. Exibimos uma mensagem de encerramento. */
        case 3:
            alert(`Encerrando o programa...`);
            break;

        /* Caso o usuário digite uma opção inválida, exibimos uma mensagem de erro. */
        default:
            alert(`Opção invalida, por favor selecione um número de 1 a 3 listados no menu.`);
        break;
    }

// O loop continua enquanto o usuário não escolher a opção 3 (Sair).
} while (menu !== 3);