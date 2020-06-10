const listarClientes = () => {
    return fetch('http://localhost:4000/clientes')
        .then(response => {
            return response.json()
        })
        .then(json => {
            return json;
        })
}

const cadastrarClientes = (nome, cpf) => {
    const Json = JSON.stringify({
       nome: nome,
       cpf: nome  
    })
    return fetch('http://localhost:4000/clientes/cliente', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: Json
    })
    .then(response => {
        return response.body
    })
}
