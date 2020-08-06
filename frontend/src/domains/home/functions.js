/* Para amanhã: Pela lista dropdown, selecionar qual pais exibir os dados
Converter data da ultima atualização
Terminar estilização
 */









async function getCountryList() {
    try{
        const result = await axios.get('https://api.covid19api.com/countries')
        const data = result.data
        const x = document.getElementById('country-list')
        

        const countryOrdered = data.sort(function(a, b){
            let nameA=a.Country.toLowerCase();
            let nameB=b.Country.toLowerCase()
            if (nameA < nameB) 
                return -1 
            if (nameA > nameB)
                return 1
            return 0 
        })
        countryOrdered.forEach(element => {
            const option = document.createElement('option')
            option.text = element.Country
            option.value = element.Slug
            x.add(option)           
        });

        
        
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
        console.log(latestData)
        
        /* if (data === [] ) {
            pais.innerHTML = '--'
            code.innerHTML = '--'
            cases.innerHTML = '--'
            lastUpdate.innerHTML = '--' 
            infected.innerHTML = '--'
            dead.innerHTML = '--'
            cured.innerHTML = '--'
            alert('não há dados para exibir')

        } */
        

        const dateRecieved = latestData.Date
        const [year,month,day] = dateRecieved.split('-')
        const [resolvedDay] = day.split('T')
        

        const dateFormated = `${resolvedDay}/${month}/${year}`



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
        lastUpdate.innerHTML = dateFormated
        infected.innerHTML = latestData.Active
        dead.innerHTML = latestData.Deaths
        cured.innerHTML = latestData.Recovered
        
    } catch (error)  {
        console.log('deu ruim', error) 
    }   
}


