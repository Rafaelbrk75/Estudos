
var nome = prompt("Informe o nome do veículo: ");
var velo = parseFloat(prompt("Qual a velocidade do veículo: "));

var nome2 = prompt("Informe o nome do veículo 2: ");
var velo2 = parseFloat(prompt("Qual a velocidade do veículo 2: "));

if(velo > velo2){
    alert("O veículo " + nome + " é mais rápido que o veículo " + nome2);
}else{
    alert("O veículo " + nome2 + " é mais rápido que o veículo " + nome);
}