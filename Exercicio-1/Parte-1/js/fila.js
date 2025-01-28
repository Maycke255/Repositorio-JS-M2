/* Fila de Espera
Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo 
contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir 
escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o 
primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso 
contrário deve voltar ao menu. */

let patientQueue = []; // Array para armazenar os pacientes

let work = prompt(
    `Bom dia, Doutor.\nVocê tem pacientes hoje?\nCaso não, você poderá descansar. (sim/não)`
);

if (work.toLowerCase() === "não") {
    alert("Obrigado Doutor, vá para casa e descanse.");
} else {
    alert("Por favor, insira os nomes dos pacientes por ordem de chegada.");

    let option;
    do {
    // Exibe a fila atual
    let queue = patientQueue.map((patient, index) => `${index + 1}º ${patient}`).join("\n");

    option = prompt(
        `Pacientes na fila:
        \n${queue || "Nenhum paciente na fila."}\n
        \nO que deseja fazer agora?
        \n1. Adicionar paciente.
        \n2. Consultar paciente.
        \n3. Sair`
    );

    switch (option) {
        case "1":
        let newPatient = prompt("Digite o nome do novo paciente:");
        if (newPatient) {
            patientQueue.push(newPatient);
            alert(`Paciente ${newPatient} adicionado à fila.`);
        } else {
            alert("Nome inválido! Tente novamente.");
        }
        break;

        case "2":
        if (patientQueue.length > 0) {
            let attendedPatient = patientQueue.shift();
            alert(`Paciente ${attendedPatient} foi consultado.`);
        } else {
            alert("Não há pacientes na fila para consultar.");
        }
        break;

        case "3":
            alert("Encerrando o programa...");
        break;

        default:
        alert("Opção inválida. Digite um número entre 1 e 3.");
        break;
    }
    } while (option !== "3");
}


