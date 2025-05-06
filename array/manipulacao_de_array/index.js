const arr = ["feijão", "farrofa", "sardinha"];
console.log(arr);

//push serve para adicionar um elemento no final do array
arr.push("Pudim");
console.log(arr);

//unshift serve para adicionar um elemento no inicio do array
arr.unshift("Arroz");
console.log(arr);

//pop serve para remover o ultimo elemento do array
let ultimoElemento = arr.pop();

//shift serve para remover o primeiro elemento do array
ultimoElemento = arr.shift();

//includes serve para verificar se um elemento existe no array
const inclui = arr.includes("feijão");
console.log(inclui);

//indexOf serve para verificar a posição de um elemento no array
const posicao = arr.indexOf("farrofa");

//slice serve para copiar um array
const copia = arr.slice(0, 2);
console.log(arr);
console.log(copia);

//concat serve para concatenar arrays
const sociedade = arr.concat(copia, "Linguisa");

//Substituição dos elementos
//splice serve para substituir elementos
const elementoRemovidos = copia.splice(indice, 1, "Tijolo");

// Iterar sobre os elementos
for (let indice = 0; indece < arr.length; indice++) {
    const elemento = arr[indice];
    console.log(elemento + " está na posição " + indice);
}