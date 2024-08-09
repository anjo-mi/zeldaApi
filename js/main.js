document.getElementById('entry').addEventListener('keypress', getEntry)



// let urlWholeCompendium = 'https://botw-compendium.herokuapp.com/api/v3/compendium/all'

// data.data.sort((a,b) => a.id - b.id)

function getEntry(event){
    if(event.key === 'Enter'){
        event.preventDefault()
        let search = document.getElementById('entry').value
        let urlCompendiumSearch = `https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${search}`
        fetch(urlCompendiumSearch)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.data.category === 'monsters'){
                    document.querySelector('.monster>.basicInfo>.category').textContent = data.data.category
                    document.querySelector('.monster>.basicInfo>.img').src = data.data.image
                    document.querySelector('.monster>.basicInfo>.name').textContent = data.data.name
                    document.querySelector('.monster>.location').textContent = data.data.common_locations.join(', ')
                    document.querySelector('.monster>.drops').textContent = data.data.drops
                    document.querySelector('.monster>.details').textContent = data.data.description
                }
            })
            .catch(err => {
                console.log(`the error: ${err}, occurred`)
            })
        document.getElementById('entry').value = ''
    }
}