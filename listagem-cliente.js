

const removeCliente = id => {
    if(confirm('Deseja deletar o cliente?')){
        deletaCliente(id)
        document.location.reload()
    }
}

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

const exibeCliente = (cpf, nome, id) => {
    const linha = document.createElement('tr')
    const conteudoLinha = `
        <td>${cpf}</td>
        <td>${nome}</td>
        <button onclick="removeCliente(${id})" 
        type="button" class="btn btn-danger">Excluir</button>
        <a href="edita-clientes.html?id=${id}">
            <button type="button" class="btn btn-info">Editar</button>
        </a>
        `
    linha.innerHTML = conteudoLinha;
    return linha
}

listarClientes().then( exibe => {
    exibe.forEach( indice => {
        corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id))
    })
})