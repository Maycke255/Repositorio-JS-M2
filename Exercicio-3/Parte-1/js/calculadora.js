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

function triangle(base, height) {
    return (base * height) / 2
}

function rectangle (base, height){
    return base * height
}

function square(lado) {
    return lado * lado
}

function trapeze(baseMinor, baseBigger, height){
    return ((baseMinor + baseBigger) * height) / 2
}

function circle(raio){
    return 3.14 * raio * raio
}

do {

    menu = parseFloat(prompt(`Selecione o tipo de operação desejada de acordo o número indicador na frente.\n\n`+
            `1. Calcular a área de um triângulo.\n`+
            `2. Calcular a área de um retângulo.\n`+
            `3. Calcular a área de um quadrado.\n`+
            `4. Calcular a área de um trapézio.\n`+
            `5. Calcular a área de um círculo\n\n`+
            `6. Sair do programa.`));

    switch (menu) {
        case 1:
            const baseTriangle = parseFloat(prompt("Vamos calcular a área do triângulo.\n"+
                                                    "A formula é: (base x altura) / 2\n"+
                                                    "Por favor, digite o valor da base."
            ));
            const heightTriangle = parseFloat(prompt("Por favor, digite o valor da altura do triângulo."));

            if (isNaN(baseTriangle) || isNaN(heightTriangle) ) {
                alert("Por favor, insira números válidos para que o programa possa a operação.");
            } else {
                let result = triangle(baseTriangle, heightTriangle)
                alert(`Área do triângulo: ${result}`);
            }
            break;

        case 2:
            const baseRectangle = parseFloat(prompt("Vamos calcular a área do retângulo.\n"+
                                                    "A formula é: base x altura\n"+
                                                    "Por favor, digite o valor da base."
            ));
            const heightRectangle = parseFloat(prompt("Por favor, digite o valor da altura do retângulo."));

            if (isNaN(baseRectangle) || isNaN(heightRectangle) ) {
                alert("Por favor, insira números válidos para que o programa possa a operação.");
            } else {
                let result = rectangle(baseRectangle, heightRectangle );
                alert(`Área do retângulo: ${result}`);
            }
            break;

        case 3:
            const sideSquare = parseFloat(prompt("Vamos calcular a área de um quadrado.\n"+
                                                "A formula é: lado x lado (os lados de um quadrado são iguais então para simplificar usamos `lado²`\n"+
                                                "Afinal para calcular a área de um quadrado e apenas multiplicar o lado².\n"+
                                                "Por favor, digite o valor do lado."
            ));

            if (isNaN(sideSquare)) {
                alert("Por favor, insira números válidos para que o programa possa a operação.");
            } else {
                let result = square(sideSquare );
                alert(`Área do retângulo: ${result}`);
            }
            break;

        case 4:
            const trapezeBaseMinor = parseFloat(prompt("Vamos calcular a área de um trapézio.\n"+
                                                        "Formula: ((valor da base menor x valor da base maior) x valor da altura) / 2\n"+
                                                        "Por favor, insira o valor da base menor."
                                                        ));
            const trapezeBaseBiiger = parseFloat(prompt("Por favor, insira o valor da base maior."));
            const trapezeHeight = parseFloat(prompt(`Por favor insira o valor da altura.`));

            if (isNaN(trapezeBaseMinor) || isNaN(trapezeBaseBiiger) || isNaN(trapezeHeight)) {
                alert("Por favor, insira números válidos para fazer a operação.");
            } else {
                

                let result = trapeze(trapezeBaseMinor, trapezeBaseBiiger, trapezeHeight)
                    alert(`Área do trapézio: ${result}`)
            }
            break;

        case 5:
            const circleRay = parseFloat((prompt("Vamos calcular a área de um circulo.\n"+
                                                "Formula: π x raio² (já que `π` não e um número inteiro, podemos considera π = 3.14, assim ficaria = 3.14 x raio x raio.)\n"+
                                                "Por favor, insira o valor do raio."
            )));
            if (isNaN(circleRay)) {
                alert("Por favor, insira números válidos para realizar a operação.");
            } else {
                let resultRay = circleRay * 2
                let result = circle(resultRay);
                alert(`Área do circulo: ${result.toFixed(3)}`);
            }
            break;

        case 6:
            alert("Encerrando programa.")
            break;
    
        default:
            alert("Opção invalída, selecione uma das opções de 1 a 6.")
            break;
    }
    
} while (menu !== 6);