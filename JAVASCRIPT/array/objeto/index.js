let objeto= {
    nome: "",
    idade: "",
    sexo: "",
}

objeto.nome= "João";
objeto.idade= 20;
objeto.sexo= "Masculino";

console.log(objeto.nome);
console.log(objeto.idade);  
console.log(objeto.sexo);
console.log(objeto);

// função que retorna um objeto

function criarProduto(nome, preco){
    let produto = {
        nome, //nome: nome
        preco, //preco: preco
        estoque: 1
    }
    return produto;
}

console.log(criarProduto("Notebook", 2199.49));