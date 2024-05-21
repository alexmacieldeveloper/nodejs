const axios = require('axios')
const URL = `https://narutodb.xyz/api/character`

async function obterTodosPersonagens (id) {
    const url = `${URL}/${id}`
    const response = await axios.get(url)
    return response.data
}
obterTodosPersonagens(1036)
    .then(function (result) {
        console.log('result', result)
    })
    .catch(function (error) {
        console.error('deu ruim', error)
    })