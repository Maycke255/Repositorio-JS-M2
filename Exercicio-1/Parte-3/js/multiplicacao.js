//definindo array vazia para os numeros.
let numbers = []

alert(`Você precisa digitar pelo menos 3 números.\n
    E então o programa vai multiplicar os 3 numeros ate chegar em 10`)

let option = prompt(`Quais números você deseja multiplicar?`);
numbers.push(option)

let operation = ``

for (let i = 0 ; i < numbers.length ; i++){
    operation += `Seu número:  ${(i+1)}  ${numbers[i]}\n`
    alert(`Multiplicação dos numeros: ${operation}\n`)
}