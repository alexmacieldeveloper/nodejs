const axios = require('axios')
const URL = `https://narutodb.xyz/api/character`

async function obterTodosPersonagens () {
    const url = `${URL}`
    const response = await axios.get(url)
    return response.data
}
obterTodosPersonagens()
    .then(function (result) {
        console.log('result', result)
    })
    .catch(function (error) {
        console.error('deu ruim', error)
    })