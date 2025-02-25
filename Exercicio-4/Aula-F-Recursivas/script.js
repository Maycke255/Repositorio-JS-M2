function fatorial (num){
    console.log(num)

    if(num === 0){
        return 1
    } else if (num === 1) {
        return 1
    } else {
        console.log(`fatorial de ${num} * !${num - 1}`)
        return num * fatorial(num - 1)
    }
}

fatorial(5)