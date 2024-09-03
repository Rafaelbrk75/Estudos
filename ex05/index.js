function main() {
    let quantidade = parseFloat(prompt("Qual é a quantidade de alunos:"))
    let vetor = new Array(quantidade)

    for(let count=0; count < quantidade; count++)
    vetor[count] = parseInt(prompt("Aluno " (count+1) + ":"))

    let soma = 0
    for(let count in vetor)
    soma += vetor[count];

    var media = soma/quantidade
    document.write("Média da turma")
}