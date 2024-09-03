const numero = prompt(
    "Olá, eu sou o Robô da Tabuada!\n" + 
    "Informe o número que você deseja calcular a tabuada: "
)// A variavel e de valor constante 

let resultado = "" // aqui a variavel tem valor vazio, podendo ser atribuido posteriormente

for (let fator = 1; fator <= 20; fator++) {
    resultado += "->" + numero + " * " + fator + " = " + (numero * fator) + "\n"
} //  dentro das instruçoes do for delimitado que os valores serão ate 20, e foi usado um ++ para fazer a soma da varialvel

alert("Resultado da Tabuada de " + numero + "\n\n" + resultado) // O alert vai servir para aparecer o resultado 