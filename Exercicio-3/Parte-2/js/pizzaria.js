/* 🎯 Exercício: Sistema de Pedidos de Pizza

Crie um sistema simples de pedidos de pizza em JavaScript. 
O usuário poderá escolher uma pizza pelo número do menu e adicionar ao carrinho. 
No final, ele pode ver o total do pedido.

📌 Requisitos:
Crie um array de objetos, onde cada objeto representa uma pizza com as propriedades:
id: número da pizza no menu.
nome: nome da pizza.
preco: preço da pizza.
Crie uma função chamada mostrarMenu() que percorre o array e exibe todas as opções de pizzas disponíveis.
Peça ao usuário para escolher uma pizza pelo número (id) e use um switch para adicionar a pizza ao carrinho.
O usuário pode escolher várias pizzas (use um loop para permitir múltiplas escolhas).
Quando o usuário digitar "0", o sistema deve exibir todas as pizzas adicionadas ao carrinho e calcular o preço total. */

let pizzas = []

function sabores (id, nome, preco) {
    const menuPizzas = parseFloat(prompt(`Escolha uma opção de pizza pelo id, o número indicador na frente.\n`+
                                        `-- ID: 1 --- Pizza de Pepperoni ---\n`+
                                        `-> Preço: 35.00\n`+
                                        "-----\n"+
                                        `-- ID: 2 --- Pizza Portuguesa ---\n`+
                                        `-> Preço: 35.00\n`+
                                        "-----\n"+
                                        `-- ID: 3 --- Pizza de Calabresa ---\n`+
                                        `-> Preço: 40.00\n`+
                                        "-----\n"+
                                        `-- ID: 5 --- Pizza de frango ---\n`+
                                        `-> Preço: 30.00\n`+
                                        "-----\n"+
                                        `-- ID: 6 --- Pizza Doce ---\n`+
                                        `-> Preço: 40.00\n`
    ))
    return {id, nome, preco}
}

function menu() {
    return parseFloat(prompt(
        `O que você deseja fazer?\n`+
        `${list || `Seu carrinho de compras está vazio.`}\n`+
        `1. Adicionar uma pizza ao carrinho.\n`+
        `2. Remover uma pizza.\n`+
        `3. Sair`
    ));
}
let menu;
    
function mostrarMenu(){
    let opcao = "";
        do {
        let list = "Seus pedidos:\n";

        for(let i = 0; i < pizzas.length; i++){
            list += `${(i + 1)}° pedido: ${pizzas[i].pizza}, preço: ${pizzas[i].preco}\n`
        }

        opcao = menu()
        let pedido;

        switch (opcao) {
            case 1:
                pedido = sabores()
                break;
        
            default:
                break;
        }

    } while (opcao !== 3);
}

