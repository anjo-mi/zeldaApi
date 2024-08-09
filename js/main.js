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
            })
            .catch(err => {
                console.log(`the error: ${err}, occurred`)
            })
        document.getElementById('entry').value = ''
    }
}