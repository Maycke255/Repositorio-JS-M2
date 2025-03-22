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
        let candidatesMore = "sim"
        while (candidatesMore === "sim" ) {
            let candidateName = prompt(`Por favor, informe o nome do candidato para adicionar a vaga.`);

            send.candidates.push(candidateName);

            candidatesMore = prompt(`Deseja adicionar mais algum candidato de inicio? Lembrando que você poderá adicionar mais depois. (sim/não)`)
                .toLowerCase();
        }
    }

    let confirm = confirm(`Deseja adicionar a vaga "${job}" com as seguintes informações?\n` +
        `Descrição: ${description}\n` +
        `Data limite: ${date}\n` +
        `Candidatos: ${send.candidates.length > 0 ? send.candidates.join(", ") : "Nenhum candidato adicionado."}`);

    if (confirm){
        slots.push(send)
        alert("A vaga foi adicionada.")
        return;
    } else {
        alert("Operação cancelada, retornando para o menu principal...")
        return;
    }
}

// 3. Visualizar uma vaga
function viewAJobList (){
    // persgunta o número da vaga que o usuario quer acessar, no caso pergunta a posição do objeto, caso tenha muitos objetos(vagas)
    let display = parseInt(prompt(`Qual vaga você deseja visualizar? Por favor indique pelo número da vaga correspondente.`)) - 1;

    /* o que vai ter dentro de um objeto na array:
    {job: "Dev full stack, description: "Precisa fazer toda a parte front tanto back end do sistema", date: "18/07/2025", candidates: ["Maycke", "Carlos,", "Giovanna",
    "Ana Clara", "Lucas Gabriel"]} */
    if (isNaN(display) || display < 0 || display >= slots.length) {
        alert(`Por favor, insira um número correspondete valido para acessar a vaga desejada...`)
        return;
    } else {
        if (slots.length === 0) {
            alert("Você não tem vagas para visualizar no momento, tente cadastrar algumas antes")
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

        if (adicionarMais !== "sim" && adicionarMais !== "não") {
            alert("Por favor, responda apenas com 'sim' ou 'não'.");
            adicionarMais = "não"; 
        }
    }
}

function deleteCandidate (){

}

// 5. Excluir uma vaga
function deleteJob (){
    let display;

    if (slots.length === 0) {
        alert(`Você não tem nenhuma vaga para remover, tente adicionar uma primeiro.`);
        return;
    } else {
        display = parseInt(prompt(`Digite o número correspondente da vaga que você deseja visualizar(ao excluir uma vaga você também exclui todos os dados dessa vaga, como
                                    descrição, data, candidatos, etc).`)) - 1;
    } if (isNaN(display) || display < 0 || display >= slots.length) {
        alert(`Por favor insira um número valido, e que esteja dentro das vagas.`);
        return;
    } else {
        let confirm = confirm(`Deseja remover a vaga ${remove.job} da sua lista?`)
        let remove = slots.splice(display, 1)[0];

        if (confirm) {
            alert(`A vaga ${remove.job} foi apagada.`);
            return;
        } else {
            alert("Operação cancelada, retornando para o menu principal...")
        }
    }
}

let count = slots.reduce(function (accumulated, element){
    return `Total de vagas cadastradas: ${(element + accumulated)}`
}, 0)

function displayMenu (){
    menu = parseFloat(prompt(`O que deseja fazer? Selecione a opção usando oo número correspondente a sua frente.\n`+
        `${slots.length === 0 ? count : "Nenhuma vaga cadastrada ainda."}\n`+
        `1. Listar vagas disponíveis\n`+
        `2. Criar um nova vaga\n`+
        `3. Visualizar uma vaga\n`+
        `4. Inscrever um candidato em uma vaga\n`+
        `5. Excluir uma vaga\n`+
        `6. Sair `
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
                deleteJob()
                break;

            case 6:
                alert(`Obrigado por usar o programa, até mais...`)
                break;
        
            default:
                alert("Opção inválida, por favor escolha uma opção de 1 a 6.")
                break;
        }
    } while (menu !== 6);
}

system()