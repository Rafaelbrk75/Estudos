function areaDoTriangulo (base, altura){
    return base * altura/2;
}

function areaDoRetangulo (base, altura){
    return base * altura; 
}


let tipo = parseFloat(prompt("Informe o tipo do calculo: \n1- Triangulo \n2- Retangulo \n3- Quadrado \n4- Trapezio \n5- Circulo"));
let base, altura, baseMaior, baseMenor, raio;

if (tipo == 4){
    baseMaior = parseFloat(prompt("Informe a base maior: "));
    baseMenor = parseFloat(prompt("Informe a base menor: "));
}else if (tipo == 5){
    raio = parseFloat(prompt("Informe o raio: "));
}else{
    base = parseFloat(prompt("Informe a base: "));
    altura = parseFloat(prompt("Informe a altura: "));
}

switch (tipo){
    case 1:
        console.log(areaDoTriangulo(base, altura));
        break;
    case 2:
        console.log(areaDoRetangulo(base, altura));
        break;
    case 3:
        console.log(areaDoQuadrado(base));
        break;
    case 4:
        console.log(areaDoTrapezio(baseMaior, baseMenor, altura));
        break;
    case 5:
        console.log(areaDoCirculo(raio));
        break;
    default:
        console.log('Tipo de figura inválido');
}


function areaDoQuadrado (lado){
    return lado * lado;
}

function areaDoTrapezio (baseMaior, baseMenor, altura){
    return (baseMaior + baseMenor) * altura / 2;
}

function areaDoCirculo (raio){
    return Math.PI * raio * raio;
}
