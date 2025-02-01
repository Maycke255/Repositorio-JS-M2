/* Exercício: Lista de Tarefas
Crie um programa em JavaScript para gerenciar uma lista de tarefas. 
O programa deve mostrar um menu interativo onde o usuário pode:
Adicionar uma nova tarefa (pedindo o nome da tarefa).
Remover uma tarefa (pedindo o número da tarefa a ser removida).
Listar todas as tarefas na ordem em que foram adicionadas.
Sair do programa. */

//definindo array vazia para os numeros.
let list = [];

let option;

do {
    let listCompleted = "";
    for (let i = 0; i < list.length; i++) {
        listCompleted += `Item da lista: ${(i + 1)} - ${list[i]}\n`;
    }

    option = prompt(
        `Bem-vindo à sua lista de tarefas.\n\n` +
        `Sua lista de tarefas atual:\n` +
        `${listCompleted || "Você ainda não adicionou nada à sua lista."}\n\n` +
        `O que deseja fazer agora?\n` +
        `1. Adicionar uma nova tarefa.\n` +
        `2. Remover uma tarefa.\n` +
        `3. Sair`
    );

    switch (option) {
        case "1":
            let addItemList = prompt("Digite o nome da sua nova tarefa:");
            if (addItemList) {
                list.push(addItemList);
                alert(`A tarefa "${addItemList}" foi adicionada à sua lista.`);
            } else {
                alert("Nenhuma tarefa foi adicionada.");
            }
            break;

        case "2":
            if (list.length === 0) {
                alert("Sua lista está vazia. Adicione algo antes de tentar remover.");
            } else {
                let removeItemList = parseInt(prompt(`Qual item deseja remover da sua lista? (Digite o número correspondente)\n\n${listCompleted}`));
                if (!isNaN(removeItemList) && removeItemList > 0 && removeItemList <= list.length) {
                    let removedTask = list.splice(removeItemList - 1, 1);
                    alert(`A tarefa "${removedTask}" foi removida.`);
                } else {
                    alert("Número inválido. Tente novamente.");
                }
            }
            break;

        case "3":
            alert("Saindo do programa e finalizando sua lista...");
            break;

        default:
            alert("Digite um número de 1 a 3 para continuar o programa.");
            break;
    }
} while (option !== "3");



