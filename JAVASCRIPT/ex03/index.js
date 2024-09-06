let valorEmMetros = parseFloat(prompt("Me passe um valor em metros: "))
const unidadeDeMedida = prompt("Escolha a unidade de medida para conversão desse valor: \n1. mm\n2. cm\n3. dm\n4. dam\n5. hm\n6. km ")


switch (unidadeDeMedida) {
    case "1":
        alert("O valor em milímetro é" + valorEmMetros * 1000 + "mm")
        break
    case "2":
        alert("O valor em centímetros é " + valorEmMetros * 100 + "cm")
        break
    case "3":
        alert("O valor em decímetro é " + valorEmMetros * 10 + "dm")
        break
    case "4":
        alert("O valor em decâmetro é " +valorEmMetros / 10 + "dam")
        break
    case "5":
        alert("O valor em hectômetro é " + valorEmMetros / 100 + "hm")
        break
    case "6":
        alert("O valor em quiômetro é " + valorEmMetros / 1000 + "km")
        break
    default:
        alert("Opção inválida")
}