const arr = [ 
  "1 Nível",
  ["2 Nível", 42, true],
  [
    ["3 nível 1 item", "Olá mundo!"],
    ["3 nível, 2 item", "Oi, mundo!"],
  ],
  []

] 

console.log(arr)
console.log[arr[0]]
console.log[arr[1]]
console.log[arr[1][0]] //Será mostrado a posição 0/inícial do 1 array.
// Cada par de colchetes referencia um nível mais interno do array
console.log(arr[1][1])    // Saída: 42
console.log(arr[2])       // Saída: [ [ '3º nível, 1º item', 'Olá, mundo!' ], [ '3º nível, 2º item', 'Oi, mundo!' ] ]
console.log(arr[2][0])    // Saída: [ '3º nível, 1º item', 'Olá, mundo!' ]
console.log(arr[2][1][1]) // Saída: 'Oi, mundo!'

// Podemos ver claramente a estrutura de uma matriz em uma tabela
const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
  ]

//console.table(matriz)

//matriz.push(["Nova linha"])
//matriz[0].push("Nova coluna")

//console.table(matriz)

//Para poder iterar facilmente pela matriz
for (let i = 0; i < matriz.length; i++){
  for(let j = 0; j < matriz[i].length; j++){
    const elemento = matriz[i][j]
    console.log("Posição: (" + i +", " + j + ") Valor: " + elemento)
  }
}
