

async function getCountryList() {
    try{
        const result = await axios.get('https://api.covid19api.com/countries')
        const data = result.data
        const x = document.getElementById('country-list')
        const countryListed = []
        data.forEach(element => {
            countryListed.push(element.Country)

        })
        const countryOrdered = countryListed.sort()

        countryOrdered.forEach(element => {
            const option = document.createElement('option')
            option.text = element
            x.add(option)
            
        });
        
    } catch (error) {
        console.log(error)
    }


}
getCountryList()


async function showData() {
    try{ 
    const res =  await axios.get('https://api.covid19api.com/country/brazil?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z')
    
    
        const [data] = res.data
        const country = data.Country
        const pais = document.getElementById('data-country')
        pais.innerHTML = country
        console.log(country)
    
    } catch (error)  {
        console.log('deu ruim', error) 
    }
    
    
}

showData()