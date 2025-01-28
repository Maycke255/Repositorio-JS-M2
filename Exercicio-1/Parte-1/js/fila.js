/* Fila de Espera
Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo 
contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir 
escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o 
primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso 
contrário deve voltar ao menu. */

let patientQueue = []

let work = prompt(`Bom dia Doutor.\n`+
    `Você tem pacientes hoje?\n`+
    `Caso não, você poderá descansar. (sim/não)`);

if (work === "não") {

    `Obrigado Doutor, va para casa e descanse.`

} else {

    let patients = prompt(`Por favor, digite o nome dos pacientes por ordem de chegada.`)
    patientQueue.push(patients);

    let menu = parseFloat(prompt(`Pacientes: ${patientQueue}\n
        O que deseja fazer agora?
        1. Adicionar paciente.
        2. Consultar paciente.
        3. Sair`))

    switch (menu) {
        case 1:
            
            break;
    
        default:
            break;
    }

}

