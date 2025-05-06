const nomeDoTurista = prompt("Qual é o seu nome?\n")
const cidade = prompt("Você ja visitou alguma cidade? (sim / não)\n ")
const cidadeVisitada = prompt("Qual era o nome dela?\n")

while (cidade) {
    alert("Você já visitou alguma outra cidade")

    if (cidade) {
        break
    }
}

alert(nomeDoTurista + cidade + cidadeVisitada)