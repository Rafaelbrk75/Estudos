var btn = document.getElementById("button")

btn.addEventListener("click",function(){
    var email = document.getElementById("email").value
    var name = document.getElementById("name").value
    var msg = document.getElementById("mensagem").value
    var span = document.getElementById("mensagemVeri")

    if(email, name, msg !=="") {
        span.style.color = 'green';
        span.innerText = "Enviado com sucesso!";
    } else {
        span.style.color = 'red'; 
        span.innerText = "Preencha corretamente os campos!";
    }
})

console.log("Meu primeiro script");

let num = 30;
let num2= 48;

console.log(num + num2);

let nome = prompt("Informe seu nome: ");
alert(nome + " seja bem vindo(a)!");

let numb = parseInt(prompt("Informe um número:"));
console.log(numb);

let boo = 2.4;
console.log(boo);

console.log(typeof(boo));

