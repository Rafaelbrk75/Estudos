const nome = prompt("Qual é o seu nome?")
let cidades = ""
let contagem = 0

let visitou = prompt("Você já visitou alguma cidade? (Sim/Não)")

while(visitou === "Sim") {
    let cidadeVisitada = prompt("Qual é o nome da cidade?")
    cidades += " - " + cidadeVisitada + "\n"
    contagem++
    visitou = prompt("Você visitou alguma outra cidade? (Sim/Não)")  
}

alert (
    "Turista: " + nome +
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidades
)