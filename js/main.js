document.getElementById('entry').addEventListener('keypress', getEntry)


// let url = `https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${search}`

function getEntry(event){
    if(event.key === 'Enter'){
        event.preventDefault()
        let search = document.getElementById('entry').value
        fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/all`)
            .then(res => res.json())
            .then(data => {
                data.data.sort((a,b) => a.id - b.id)
                console.log(data)
            })
            .catch(err => {
                console.log(`the error: ${err}, occurred`)
            })
        document.getElementById('entry').value = ''
    }
}