/* Sistema de Vagas de Emprego
Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. 
Ele deve atender aos seguintes requisitos:
Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistemaListar vagas disponíveisCriar um nova vagaVisualizar uma 
vagaInscrever um candidato em uma vagaExcluir uma vagaSair
1. Listar vagas disponíveis
2. Criar um nova vaga
3. Visualizar uma vaga
4. Inscrever um candidato em uma vaga
5. Excluir uma vaga
6. Sair
A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações 
antes de salvá-las.
A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos 
e o nome dos candidatos.
A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga 
antes de salvar o candidato na vaga.
A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.
Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções. */

let slots = []
let menu;

alert("Bem vindo ao programa de cadastro de vagas de emprego");

// 1. Listar vagas disponiveis:
function listJobs (){
    if (slots.length === 0) {
        alert(`Você ainda não tem nenhuma vaga cadastrada, tente cadastrar uma antes.`)
        return;
    } else {
        let travel = slots.map(function (element, i){
            let list = `Vaga de número: ${(1 + i)}\n`+
                        `Nome da vaga: ${element.job}\n`+
                        `Quantidade de candidatos: ${element.candidates.length}\n`+
                        `--------------------------------`
            return list
        }).join("\n")

        alert(travel)
    }
}

// 2. Criar uma nova vaga
function addJob (){
    let job = prompt(`Por favor, digite o nome da vaga. (Ex: Dev. Full Stack)`);
    let description = prompt(`Por favor, digite uma breve descrição para a vaga. (Ex: "Você será responsavel por toda parte de Front e Back end da equipe, ultilizando 
                            JavaScript, HTML, CSS, React e python")`);
    let date = prompt(`Por favor, digite uma data para ecerração da vaga, ou seja a data em que as candidaturas da vaga irão expirar.`);
    let candidatesYes = prompt(`Deseja adicionar um candidato de inicio? Você poderá adicionar mais tarde caso não queira. (sim/não)`).toLowerCase();

    let send;

    if (candidatesYes !== "sim" && candidatesYes !== "não"){
        alert(`Por favor, responda apenas com sim ou não.`);
        candidatesYes = "não"
    };

    send = {
        job,
        description,
        date,
        candidates: []
    };
            
    if (candidatesYes === "sim") {
        let candidatesMore = "sim";
        while (candidatesMore === "sim") {
            let candidateName = prompt("Por favor, informe o nome do candidato para adicionar à vaga.");
            if (candidateName) {
                send.candidates.push(candidateName);
            } else {
                alert("O nome do candidato é obrigatório. Candidato não adicionado.");
            }

            candidatesMore = prompt("Deseja adicionar mais algum candidato de início? Lembrando que você poderá adicionar mais depois. (sim/não)").toLowerCase();
            if (candidatesMore !== "sim" && candidatesMore !== "não") {
                alert("Por favor, responda apenas com 'sim' ou 'não'. A adição de candidatos será encerrada.");
                candidatesMore = "não";
            }
        }
    }

    let confirmAdd = confirm(`Deseja adicionar a vaga "${job}" com as seguintes informações?\n` +
        `Descrição: ${description}\n` +
        `Data limite: ${date}\n` +
        `Candidatos: ${send.candidates.length > 0 ? send.candidates.join(", ") : "Nenhum candidato adicionado."}`);

    if (confirmAdd) {
        slots.push(send);
        alert("A vaga foi adicionada com sucesso!");
    } else {
        alert("Operação cancelada. A vaga não foi adicionada.");
    }
}

// 3. Visualizar uma vaga
function viewAJobList (){
    if (slots.length === 0) {
        alert("Você não tem vagas para visualizar no momento, tente cadastrar algumas antes")
        return;
    }    

    let view = slots.map(function (element, i){
        return `${(i + 1)}. ${element.job}`
    }).join("\n")
    
    let display = parseInt(prompt(`Qual vaga você deseja visualizar? Por favor indique pelo número da vaga correspondente.\n`+
                                `${view}\n`
    )) - 1;

    if (isNaN(display) || display < 0 || display >= slots.length) {
            alert(`Por favor, insira um número correspondete valido para acessar a vaga desejada...`)
            return;
    } else {
        let element = slots[display]

        let list = `Vaga ${(display + 1)}\n`+
                    `Nome da vaga: ${element.job}\n`+
                    `Descrição da vaga: ${element.description}\n`+
                    `Data limite da vaga: ${element.date}\n`+
                    `Numero de candidatos: ${element.candidates.length}\n`+
                    `Candidatos para a vaga: ${element.candidates.join(", ")}`

        alert(list)
    }
}

// 4. Inscrever um candidato em uma vaga
function addCandidate (){
    if (slots.length === 0) {
        alert(`Não a vagas cadastradas, por favor cadastre uma vaga antes de adicionar algum candidato.`);
        return;
    }

    let view = slots.map(function (element, i){
        return `${(i + 1)} - ${element.job}`        
    }).join("\n")
    let listJob = parseInt(prompt(`Selecione a vaga em que deseja inscrever o candidato pelo número correspondente na sua frente:\n`+
                        `${view}`              
    )) - 1

    if (isNaN(listJob) || listJob < 0 || listJob >= slots.length) {
        alert(`Número invalido, por favor tente novamente`);
        return;
    };

    let selected = slots[listJob].job

    let candidateMore = "sim";
    while (candidateMore === "sim") {
        let candidateName = prompt(`Digite o nome do candidato para adicionar a vaga ${selected}.`)
        let message = confirm(`Deseja adicionar o candidato ${candidateName} a vaga ${selected}?`)

        if (message) {
            slots[listJob].candidates.push(candidateName)
            alert(`O candidato ${candidateName} foi incluido a vaga ${selected}.`)
        } else {
            alert("Operação cancelada, retornando para o menu principal...")
            return
        }

        candidateMore = prompt(`Deseja adicionar mais algum candidato a esta vaga ${selected}? (sim/não)`).toLowerCase()

        if (candidateMore !== "sim" && candidateMore !== "não") {
            alert("Por favor, responda apenas com 'sim' ou 'não'.");
            adicionarMais = "não"; 
        }
    }
}

// 5. Remover um candidato de uma vaga
function deleteCandidate (){
    if (slots.length === 0) {
        alert(`Não a vagas cadastradas, por favor, cadastre alguma antes...`);
        return;
    }

    let view = slots.map(function (element, i){
        return `${(i + 1)} - ${element.job}`
    }).join("\n");

    let selectedJob = parseInt(prompt(`Por favor, selecione a vaga desejada de acordo com o número indicativo a sua frente.\n`+
                                    `${view}`
    )) - 1;

    if (isNaN(selectedJob) || selectedJob < 0 || selectedJob >= slots.length) {
        alert("Número inválido. Por favor, tente novamente.");
        return;
    }

    let selectedCandidate = slots[selectedJob].candidates

    if (selectedCandidate.length === 0) {
        alert(`Não há candidatos nessa vaga, por favor implemente candidatos nesta vaga antes de remover...`)
        return;
    }

    let viewCandidates = selectedCandidate.map(function (element, i){
        return `${(i + 1)} - ${element}`
    }).join("\n")

    if (isNaN(selectedJob) || selectedJob < 0 || selectedJob >= slots.length) {
        alert("Numero invalido, por favor tente novamente...")
        return;
    } else {
        let removeCandidate = parseInt(prompt(`Por favor, selecione o candidato que desejada remover da vaga de acordo com o número indicativo a sua frente.\n`+
                                                `${viewCandidates}`
        )) - 1;

        if (isNaN(removeCandidate) || removeCandidate < 0 || removeCandidate >= selectedCandidate.length) {
            alert("Numero invalido, por favor tente novamente...")
            return;
        } else {
            let candidateName = selectedCandidate[removeCandidate];
            let jobName = slots[selectedJob].job
            let confirmRemove = confirm(`Deseja remover o candidato ${candidateName} da vaga ${jobName}?`);

            if (confirmRemove) {
                selectedCandidate.splice(removeCandidate, 1);
                alert(`O candidato ${candidateName} foi excluido da vaga ${jobName}.`);
                return;
            } else {
                alert(`Operação cancelada, o candidato não foi removido, voltando ao menu principal...`)
            }
        }
    }
}

// 6. Excluir uma vaga
function deleteJob (){
    let display;

    if (slots.length === 0) {
        alert(`Você não tem nenhuma vaga para remover, tente adicionar uma primeiro.`);
        return;
    } else {
        let view = slots.map(function (element, i){
            return `${(i + 1)} - ${element.job}`
        }).join("\n");

        display = parseInt(prompt(`Digite o número correspondente da vaga que você deseja visualizar(ao excluir uma vaga você também exclui todos os dados dessa vaga, como
                                    descrição, data, candidatos, etc).\n`+
                                    `${view}`)) - 1;
    }

    if (isNaN(display) || display < 0 || display >= slots.length) {
        alert(`Por favor insira um número valido, e que esteja dentro das vagas.`);
        return;
    }

    let selectedJob = slots[display];

    let userConfirm = confirm(`Deseja remover a vaga ${selectedJob.job} da sua lista?`)

    if (userConfirm) {
        slots.splice(display, 1)
        alert(`A vaga ${selectedJob.job} foi apagada.`);
        return;
    } else {
        alert("Operação cancelada, retornando para o menu principal...")
    }
}

function displayMenu (){
    let vagasCadastradas = slots.length === 0 ? "Nenhuma vaga cadastrada ainda." : `Total de vagas cadastradas: ${slots.length}`;

    menu = parseFloat(prompt(`O que deseja fazer? Selecione a opção usando oo número correspondente a sua frente.\n`+
        `${vagasCadastradas}\n`+
        `1. Listar vagas disponíveis\n`+
        `2. Criar um nova vaga\n`+
        `3. Visualizar uma vaga\n`+
        `4. Inscrever um candidato em uma vaga\n`+
        `5. Remover um candidato de uma vaga.\n`+
        `6. Excluir uma vaga\n`+
        `7. Sair `
    ))
}

function system (){
    do {
        displayMenu()
        
        switch (menu) {
            case 1:
                listJobs()
                break;
            
            case 2:
                addJob()
                break;

            case 3:
                viewAJobList()
                break;

            case 4:
                addCandidate()
                break;

            case 5:
                deleteCandidate()
                break;

            case 6:
                deleteJob()
                break;

            case 7:
                alert(`Obrigado por usar o programa, até mais...`)
                break;
        
            default:
                alert("Opção inválida, por favor escolha uma opção de 1 a 7.")
                break;
        }
    } while (menu !== 7);
}

system()