// calcular é a minha High Order Function
function calcular (a,b, operacao){
    console.log("Realizando uma operação.");
    const resultado = operacao(a,b);
    return resultado;
}

function somar(x,y){
    console.log("Realizando uma soma.");
    return x+y;
}

calcular(10, 20, somar);

calcular(8, 4, function (x,y){
    console.log("Realizando uma subtração.");
    return x-y;
});

function exebirEllemento(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ["Maçã", "Banana", "Pera", "Uva"];

lista.forEach(exebirEllemento);