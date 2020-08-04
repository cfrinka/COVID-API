const axios = require('axios')



async function showData() {
    await axios.get('https://api.covid19api.com/country/brazil?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z')
    .then(res => {
        const [data] = res.data
        const country = data.Country
        const pais = document.getElementById('exibirPais')
        pais.innerHTML = country
        console.log(country)
    })
    .catch (error => {
        console.log('deu ruim', error)
    })
    
}

showData()

