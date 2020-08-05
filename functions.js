/* Para amanhã: Pela lista dropdown, selecionar qual pais exibir os dados
Converter data da ultima atualização
Terminar estilização
 */









async function getCountryList() {
    try{
        const result = await axios.get('https://api.covid19api.com/countries')
        const data = result.data
        const x = document.getElementById('country-list')
        const countryListed = []
        //const countrySlug = []
        data.forEach(element => {
            countryListed.push(element.Slug)
        })
        const countryOrdered = countryListed.sort()

        countryOrdered.forEach(element => {
            const option = document.createElement('option')
            option.text = element
            x.add(option)           
        });

        /* data.forEach(element => {
            countrySlug.push(element.Slug)
        })
        const slugOrdered = countrySlug.sort()
        const slugHidden = document.getElementById('slug')
        slugHidden.innerHTML = slugOrdered */


        //criar um innerhtml invisivel para usar a variável para chamar na função showData
        // como tratar retorno vazio??
        
    } catch (error) {
        console.log(error)
    }
}
getCountryList()


async function showData() {
    const country = document.getElementById("country-list").value

    try{ 
    const res =  await axios.get(`https://api.covid19api.com/country/${country}`)
    
    
        const data = res.data
        const latestData = data[data.length - 1]
        

        const pais = document.getElementById('data-country')
        const code = document.getElementById('data-code')
        const cases = document.getElementById('data-cases')
        const lastUpdate = document.getElementById('data-last-update')
        const infected = document.getElementById('infected')
        const dead = document.getElementById('dead')
        const cured = document.getElementById('cured')

        pais.innerHTML = latestData.Country
        code.innerHTML = latestData.CountryCode
        cases.innerHTML = latestData.Confirmed
        lastUpdate.innerHTML = latestData.Date
        infected.innerHTML = latestData.Active
        dead.innerHTML = latestData.Deaths
        cured.innerHTML = latestData.Recovered
        
    } catch (error)  {
        console.log('deu ruim', error) 
    }   
}


