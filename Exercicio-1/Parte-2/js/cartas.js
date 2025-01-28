/* Pilha de Cartas
Escreva um programa em javascript para simular um baralho de cartas. O programa deve 
iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão 
atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. 
Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e 
adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a 
carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve 
ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu. */

//array para armazenar as cartas
let letters = []

alert(`Por favor pegue cartas para o seu baralho.`)

let deck;

do {

    let queue = letters.map((letter, index) => `${index + 1}º ${letter}`).join("\n");
    
    deck = prompt(`Quantidade de cartas na manga:
        \n${queue || `Nenhuma carta adicionada ainda.`}\n
        \nO que deseja fazer agora?
        \n1. Adicionar uma carta.
        \n2. Puxar uma carta do baralho(você vai remover a primeira carta que adicionou ao baralho.).
        \n3. Sair e fechar baralho.`
    );

    switch (deck) {
        case "1":
            let newLetter = prompt("Digite o nome da carta a ser adicionada:");
        if (newLetter) {
            letters.unshift(newLetter);
            alert(`A carta ${newLetter} adicionado ao seu baralho`);
        } else {
            alert("Nome inválido! Tente novamente.");
        }
        break;

        case "2":
            if (letters.length > 0) {
                let removedLetter = letters.shift();
            alert(`A carta ${removedLetter} foi removida do baralho.`);
            } else {
                alert(`Adicione cartas ao seu baralho primeiro`)
            }
        break;

        case "3":
            alert(`Encerrando programa e guardando baralho...`)
        break;
    
        default:
            break;
    }
    
} while (deck !== "3");

