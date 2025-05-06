let display = document.getElementById("display");
let valor = prompt("Informe um valor em metros para a conversão: "); 

function converMm(n1= 1000){
    valor *= n1;
    display.textContent = valor + "mm";
}

function converCm(n1= 100){
    valor *= n1;
    display.textContent = valor + "cm";
}

function converKm(n1= 1000){
    valor /= n1;
    display.textContent = valor + "km";
}

function converDam(n1= 10){
    valor /= n1;
    display.textContent = valor + "dam";
}

function converDm(n1 = 10){
    valor *= 10;
    display.textContent = valor + "dm";
}

function converHm(n1 = 100){
    valor *= 100;
    display.textContent = valor + "hm";
}

