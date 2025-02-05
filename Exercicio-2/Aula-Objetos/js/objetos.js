const objeto = [];

let menu;

do {

    let list = "";
    for (let i = 0; i < objeto.length; i++){
    list += `Dados cadastrados: ${(1 + i)}  \n`+
            `Nome: ${objeto[i].nome}\n`+
            `Idade: ${objeto[i].idade}\n`+
            `Cidade: ${objeto[i].cidade}\n`+
            `Cursos: ${objeto[i].cursos}\n`+
            "----------------------------"
}

    menu = prompt(`Sua lista:\n`+
        `${list || `Sua lista esta vazia`}\n\n`+
        `Digite uma opção de 1 a 3.\n`+
        `1. Adicionar um objeto.\n`+
        `2. Remover um objeto.\n`+
        `3. Sair\n`
)

switch (menu) {
    case "1":
        const name = prompt(`Por favor informe seu nome.`)
        const yers = prompt(`Por favor informe a sua idade.`)
        const city = prompt(`Por favor insira sua cidade e UF.`)
        const cursos = prompt(`Você tem algum curso?`).toLowerCase()

        let seusCursos = []

        if (cursos === "sim") {
            let quaisCursos = prompt(`Por favor, coloque seus cursos separados por virgula.`)
            seusCursos.push(quaisCursos)
        } else {
            alert(`OK...`)
        }

        const informações = {
            nome: name,
            idade: yers,
            cidade: city,
            cursos: seusCursos
        }

        objeto.push(informações)
        break;

    case "2":

        break;

    case "3":
        
        break;

    default:
        alert(`Opção invalida, insira um número de 1 a 3 conforme prescrito.`)
        break;
}
    
} while (menu !== "3");