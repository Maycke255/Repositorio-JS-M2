/* Escreva um programa em JavaScript que funcione como um gerenciador de tarefas. O programa deve atender aos seguintes requisitos:
Menu interativo:
O menu deve ser exibido repetidamente até que o usuário escolha sair.
No topo do menu, mostre a quantidade de tarefas cadastradas.
Opções do menu:
1. Adicionar uma nova tarefa:
O programa deve pedir as seguintes informações:
Descrição da tarefa.
Prioridade (alta, média, baixa).
A tarefa deve ser armazenada como um objeto com essas propriedades.
2. Listar todas as tarefas:
Mostre todas as tarefas cadastradas, exibindo a descrição e a prioridade de cada uma.
3. Remover uma tarefa:
O usuário deve poder remover uma tarefa da lista, informando o número correspondente.
4. Sair:
Encerra o programa. */

let tasks = []

alert(`Bem vindo ao menu de tarefas.`)

let menu;

do {

    let tasksList = ""
    for(let i = 0; i < tasks.length ; i++){
        tasksList += `Sua lista de tarefas: ${(i + 1)} - ${tasks[i].tarefa}\n`
    }

    menu = parseFloat(prompt(`Sua lista de tarefas atual:`+
                            `${tasksList || `Sua lista de tarefas atual está vazia.`}`+
                            `1. Adicionar uma nova tarefa.`+
                            `2. Listar todas as tarefas.`+
                            `3. Remover uma tarefa.`+
                            `4. Sair.`
    ));

    switch (menu) {
        case 1:
            const addTask = prompt(`Descreve a tarefa, coloque o que você precisa fazer.`)
            const taskPriority = prompt(`Prioridade da tarefa, pode ser definida como alta, baixa ou média.`).toLowerCase();

            while(taskPriority !== "alta" && taskPriority !== "média" && taskPriority !== "baixa"){
                taskPriority = prompt(`Prioridade invalida! Por favor, ultilize "alta", "média" ou "baixa" (não esqueça do acento.)`).toLowerCase()
            }

            const objectTask = {
                tarefa: addTask,
                prioridade: taskPriority
            }

            tasks.push(objectTask)
                alert(`Tarefa adicionada com sucesso!`)
            break;

            case 2:

                if (tasks === 0) {
                    alert(`Sua lista ainda esta vazia, por favor adicione algo.`)
                } else {
                    let list = "Sua lista atual:\n\n"
                    for(let i = 0; i < tasks.length; i++){
                        list += `tarefa ${i + 1 }:\n`+
                        `Descrição: ${tasks[i].tarefa}\n`+
                        `Prioridade: ${tasks[i].prioridade}\n\n`+
                        `----------------------------------`
                    }
                    alert(list);
                }
                
            break;

            case 3:
                if (tasks.length === 0) {
                    alert("Não há tarefas para remover.");
                } else {
                    let indice = parseInt(prompt("Digite o número da tarefa que deseja remover:")) - 1;
                    if (!isNaN(indice) && indice >= 0 && indice < tasks.length) {
                        let tarefaRemovida = tasks.splice(indice, 1)[0];
                        alert(`Tarefa "${tarefaRemovida.tarefa}" removida com sucesso!`);
                    } else {
                        alert("Número inválido!");
                    }
                }
            break;

            case 4:
                alert(`Saíndo do programa...`)
            break

            
    
        default:
            alert(`Opção invalida. Ultilize as opções por números de 1 a 4`)
        break;
    }
    
} while (menu !== 4);