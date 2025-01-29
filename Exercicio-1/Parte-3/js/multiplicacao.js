/* Exercício: Lista de Tarefas
Crie um programa em JavaScript para gerenciar uma lista de tarefas. 
O programa deve mostrar um menu interativo onde o usuário pode:
Adicionar uma nova tarefa (pedindo o nome da tarefa).
Remover uma tarefa (pedindo o número da tarefa a ser removida).
Listar todas as tarefas na ordem em que foram adicionadas.
Sair do programa. */

//definindo array vazia para os numeros.
let list = []

let option;

do {
    let listCompleted = ""
    for (let i = 0 ; i < list.length ; i++){
        listCompleted += `Item da lista: ${(i+1)} - ${list[i]}\n`
    }

    option = prompt(`Bem vindo as suas listas de tarefas.\n
        Sua lista de tarefas atual: \n
        ${listCompleted || `Você ainda não adicionou nada a sua lista`}\n
        \nO que deseja fazer agora?\n
        1. Adicionar uma nova tarefa.\n
        2. Remover uma tarefa.\n
        3. Sair`);

        switch (option) {
            case "1":
                let addItemList = prompt(`Digite o nome da sua nova tarefa que você irá fazer hoje.`)
                list.push(addItemList)
                alert(`A tarefa ${addItemList} foi adicionada(o) a sua lista.`)
            break;

            case "2":
                if (list.length === 0) {
                    let removeItemLidt = prompt(`Qual item deseja remover da sua lista?\n
                        (utilize os números correspondentes na frente de cada item da lista).`)
                        list.splice(removeItemLidt)
                } else {
                    alert(`Sua lista esta vazia, coloque algo nela antes para poder remover.`)
                }
            break;

            case "3":
                alert(`Saindo do programa e finalizando sua lista...`)
            break;
        
            default:
                alert(`Digite um numero de 1 a 3 para continuar o programa.`)
            break;
        }
    
} while (option !== "3");


