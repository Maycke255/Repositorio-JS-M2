//definindo array vazia para os numeros.
let numbers = []

alert(`Você precisa digitar pelo menos 3 números.\n
    E então o programa vai multiplicar os 3 numeros ate chegar em 10`)

let option = parseInt(prompt(`Quais números você deseja multiplicar?`));

for (let i = 0 ; i <= 10 ; i++){
    let operation = i * numbers
    alert(`Multiplicação dos numeros: ${numbers}\n
        ${operation}`)
}