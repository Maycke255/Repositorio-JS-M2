/* Calculadora Geométrica
Escreva um programa em javascript para calcular a área de diferentes formas geométricas. 
O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:
área do triângulo: base * altura / 2
área do retângulo: base * altura
área do quadrado: lado²
área do trapézio: (base maior + base menor) * altura / 2
área do círculo: pi * raio² (considere pi = 3.14)
Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. 
O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu. */

let menu = "";

alert("Bem vindo ao programa da calculadora geometrica.");

do {

    menu = parseFloat(prompt(`Selecione o tipo de operação desejada de acordo o número indicador na frente.\n\n`+
            `1. Calcular a área de um triangulo.\n`+
            `2. Calcular a área de um retangulo.\n`+
            `3. Calcular a área de um quadrado.\n`+
            `4. Calcular a área de um trapézio.\n`+
            `5. Calcular a área de um círculo\n\n`+
            `6. Sair do programa.`))

    switch (menu) {
        case 1:
            
            break;
    
        default:
            alert("Opção invalída, selecione uma das opções de 1 a 6.")
            break;
    }
    
} while (menu !== 3);