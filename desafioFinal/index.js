let vagas = [
    {"id": 1, "Nome": "Desenvolvedor", "Candidatos": 30, "Quantidade": 8},
    {"id": 2, "Nome": "Analista de Sistemas", "Candidatos": 20, "Quantidade": 5},
    {"id": 3, "Nome": "Gerente de Projetos", "Candidatos": 10, "Quantidade": 2}
];

let tipo;
do {
    tipo = parseFloat(prompt("1-Listar vagas disponíveis\n2-Criar um nova vaga\n3-Visualizar uma vaga\n4-Inscrever um candidato em uma vaga\n5-Excluir uma vaga\n6-Sair"));
    switch(tipo) {
        case 1:
            listarVagas();
            break;
        case 2:
            criarVaga();
            break;
        case 3:
            visualizarVaga();
            break;
        case 4:
            inscreverCandidato();
            break;
        case 5:
            excluirVaga();
            break;
        case 6:
            alert("Saindo...");
            break;
        default:
            alert("Opção inválida");
    }
} while(tipo !== 6);

function listarVagas() {
    let vagasListadas = vagas.map(vaga => {
        return `Nome: ${vaga.Nome}, Candidatos: ${vaga.Candidatos}, Quantidade: ${vaga.Quantidade}`;
    }).join("\n");
    alert(vagasListadas);
}

function criarVaga() {
    let conf = 0;
    do{
        let nome = prompt("Informe o nome da vaga");
        let info = prompt("Informe a data limite para inscrição");
        let descricao = prompt("Informe a descrição da vaga");
        let quantidade = parseFloat(prompt("Informe a quantidade de vagas"));
        conf = parseFloat(prompt("Confirma a criação da vaga?\n1-Sim\n2-Não"));
        if(conf == 1){
            let vagaNova = {
                "id": vagas.length+1,
                "Nome": nome,
                "Candidatos": 0,
                "Quantidade": quantidade
            }
            vagas.push(vagaNova);
            alert("Vaga criada com sucesso");
        }
    }while(conf !== 1);
    
}