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



function viewAJobList (){
    let display = prompt(`Qual vaga você deseja visualizar? Por favor indique pelo número da vaga correspondente.`) - 1;
    
    if (isNaN(display)) {
        alert(`Por favor, insira um número correspondete valido para acessar a vaga desejada...`)
        return null
    } else {
        if (slots === 0) {
            alert("Você não tem vagas para visualizar no momento, tente cadastrar algumas antes")
        } else {
            let element = slots[display]
            let list = `Vaga ${(display + 1)}\n`+
                        `Nome da vaga: ${element.job[display]}\n`+
                        `Quantidade de candidatos inscritos nesta vaga: ${element.quantity[display]}`

            return list
        }
    }
}

function system (){
    do {
        switch (menu) {
            case 1:
                
                break;
            
            case 2:

                break;

            case 3:
                viewAJobList()
                break;

            case 4:
                
                break;

            case 5:
                
                break;
        
            default:
                alert("Opção inválida, por favor escolha uma opção de 1 a 6.")
                break;
        }
    } while (menu !== 6);
}