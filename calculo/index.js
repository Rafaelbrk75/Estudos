const nome = prompt("Insira um nome para seu personagem!")
const poderDeAtaque = parseFloat(prompt("Quantidade de poder de ataque!"))

const defensor = prompt("Qual é o nome do personagem defensor?")
let pontoDeVida = parseFloat(prompt("Quantos pontos de vida ele possui?"))
const poderDeDefesa = parseFloat(prompt("Qual é o seu poder de defesa?"))
const possuiEscudo = prompt("Ele possui um escudo? (Sim/Não)")

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
    danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontoDeVida -= danoCausado 

alert (nome + " causou " + danoCausado + " pontos de dano em " + defensor)
alert (
    atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
    defensor + "\nPontos de Vida: " + pontoDeVida +
    "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)