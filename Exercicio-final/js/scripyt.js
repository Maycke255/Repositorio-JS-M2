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
        return null
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
    let candidates = prompt(`Deseja adicionar um candidato de inicio? Você poderá adicionar mais tarde caso não queira. (sim/não)`);

    if (candidates !== "sim" || candidates !== "não"){
        let send = {
            job,
            description,
            date
        }

        slots.push(send);

        alert(`Por favor, responda apenas com sim ou não.`);
        alert(`Foram salvos na sua vaga apenas o nome: ${job}, a descrição: ${description} e a data limite: ${date}, como você não adicionou nenhum candidato por que
            não selecionou "sim" ou "não", mas poderá adicionar mais tarde`);
            
        return;
    } else {
        if (candidates === "sim") {
            
        } else {
            
        }
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

            return list;
        }
    }
}

// 5. Excluir uma vaga
function deleteJob (){
    if (slots.length === 0) {
        alert(`Você não tem nenhuma vaga para remover, tente adicionar uma primeiro.`);
        return;
    } else {
        let display = parseInt(prompt(`Digite o número correspondente da vaga que você deseja visualizar(ao excluir uma vaga você também exclui todos os dados dessa vaga, como
                                    descrição, data, candidatos, etc).`)) - 1;
    } if (isNaN(display) || display < 0 || display >= slots.length) {
        alert(`Por favor insira um número valido, e que esteja dentro das vagas.`);
        return;
    } else {
        let remove = slots.splice(display, 1)[0];
        alert(`A vaga ${remove.job} foi apagada.`);
        return;
    }
}

function system (){
    do {
        switch (menu) {
            case 1:
                listJobs()
                break;
            
            case 2:

                break;

            case 3:
                viewAJobList()
                break;

            case 4:
                
                break;

            case 5:
                deleteJob()
                break;
        
            default:
                alert("Opção inválida, por favor escolha uma opção de 1 a 6.")
                break;
        }
    } while (menu !== 6);
}

alert(exibir())
alert(iteracao)