function procurarCep() {
    // Inicia o preloader

    let cep = document.getElementById('cep').value

    axios.get(`http://api.postmon.com.br/v1/cep/${cep}`)//url que sera feita a requisicao ajax
        .then(response => {
            showResults(response.data)//entao chama a funcao para retornar os dados
        })
        .catch(error => {
            document.getElementById('error').style.display = 'block'

            document.getElementById('error').innerHTML = 'Erro inesperado'
        })

    event.preventDefault()
}

function showResults(address) {
    // Mostra a div com o resultado
    document.getElementById('results').style.display = 'block'

    // Mostra os resultados:
    document.getElementById('results').innerHTML = `
					<p><b>Bairro: </b> ${address.bairro} </p>
					<p><b>Cidade: </b> ${address.cidade} </p>
					<p><b>Logradouro: </b> ${address.logradouro} </p>
					<p><b>Cep: </b> ${address.cep} </p>
				`
}
