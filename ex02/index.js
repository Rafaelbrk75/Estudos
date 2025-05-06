const veiculo = prompt("Escreva o nome de um veículo")
const veiculo2 = prompt("Escreva o nome de outro veículo")
const velocidade = parseFloat(prompt("Informe e a velocidade do " + veiculo))
const velocidade2 = parseFloat(prompt("Insira a velocidade do" + veiculo2))

if (velocidade > velocidade2) {
    alert("O veículo mais rápido é o " + veiculo)
} else if (velocidade2 > velocidade) {
    alert("O veículo mais rápido é o " + veiculo2)
} else {
    alert(veiculo + veiculo2 + "Estão na mesma velocidade")
} 