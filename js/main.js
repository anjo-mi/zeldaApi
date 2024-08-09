document.getElementById('entry').addEventListener('keypress', getEntry)



let urlWholeCompendium = 'https://botw-compendium.herokuapp.com/api/v3/compendium/all'

const getAllEntries = url =>{
    fetch(url)
        .then(res => res.json())
        .then(data => 
            console.log(data)
        )
    }

getAllEntries(urlWholeCompendium)

function showAndHide(category){
    if (category === 'monsters'){
        document.querySelector('.monster').classList.toggle('hidden')
    }
    if (category === 'equipment'){
        document.querySelector('.equip').classList.toggle('hidden')
    }
    if (category === 'materials'){
        document.querySelector('.material').classList.toggle('hidden')
    }
    if (category === 'creatures'){
        document.querySelector('.creature').classList.toggle('hidden')
    }
    if (category === 'treasure'){
        document.querySelector('.treasure').classList.toggle('hidden')
    }
}

// data.data.sort((a,b) => a.id - b.id)

function getEntry(event){
    if(event.key === 'Enter'){
        event.preventDefault()
        let search = document.getElementById('entry').value
        let urlCompendiumSearch = `https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${search}`
        fetch(urlCompendiumSearch)
            .then(res => res.json())
            .then(data => {
                let category = data.data.category
                showAndHide(category)
                console.log(data)
                if (category === 'monsters'){
                    document.querySelector('.monster>.basicInfo>.category').textContent = data.data.category
                    document.querySelector('.monster>.basicInfo>.img').src = data.data.image
                    document.querySelector('.monster>.basicInfo>.name').textContent = data.data.name
                    document.querySelector('.monster>.location').textContent = data.data.common_locations.join(', ')
                    document.querySelector('.monster>.drops').textContent = data.data.drops.join(', ')
                    document.querySelector('.monster>.details').textContent = data.data.description
                }
                if (category === 'equipment'){
                    document.querySelector('.equip>.basicInfo>.category').textContent = data.data.category
                    document.querySelector('.equip>.basicInfo>.img').src = data.data.image
                    document.querySelector('.equip>.basicInfo>.name').textContent = data.data.name
                    document.querySelector('.equip>.location').textContent = data.data.common_locations.join(', ')
                    document.querySelector('.equip>.details').textContent = data.data.description
                    if (data.data.properties.attack){    
                        document.querySelector('.equip>.attOrDef').textContent = `Attack: ${data.data.properties.attack}`
                    }else{
                        document.querySelector('.equip>.attOrDef').textContent = `Defense: ${data.data.properties.defense}`

                    }
                }
                if (category === 'materials'){
                    document.querySelector('.material>.basicInfo>.category').textContent = data.data.category
                    document.querySelector('.material>.basicInfo>.img').src = data.data.image
                    document.querySelector('.material>.basicInfo>.name').textContent = data.data.name
                    document.querySelector('.material>.location').textContent = data.data.common_locations.join(', ')
                    document.querySelector('.material>.details').textContent = data.data.description
                    document.querySelector('.material>.cooked').textContent = `Cooking Effects: ${data.data.cooking_effect}`
                    document.querySelector('.material>.recovery').textContent = `${data.data.hearts_recovered} Hearts Recovered (Raw)`
                }
                if (category === 'creatures'){
                    document.querySelector('.creature>.basicInfo>.category').textContent = data.data.category
                    document.querySelector('.creature>.basicInfo>.img').src = data.data.image
                    document.querySelector('.creature>.basicInfo>.name').textContent = data.data.name
                    document.querySelector('.creature>.location').textContent = data.data.common_locations.join(', ')
                    document.querySelector('.creature>.details').textContent = data.data.description
                    if (data.data.edible){
                        document.querySelector('.creature>.cooked').textContent = `Cooking Effects: ${data.data.cooking_effect}`
                        document.querySelector('.creature>.recovery').textContent = `${data.data.hearts_recovered} Hearts Recovered (Raw)`
                    }
                }
                if (category === 'treasure'){
                    document.querySelector('.treasure>.basicInfo>.category').textContent = data.data.category
                    document.querySelector('.treasure>.basicInfo>.img').src = data.data.image
                    document.querySelector('.treasure>.basicInfo>.name').textContent = data.data.name
                    document.querySelector('.treasure>.location').textContent = data.data.common_locations.join(', ')
                    document.querySelector('.treasure>.drops').textContent = data.data.drops.join(', ')
                    document.querySelector('.treasure>.details').textContent = data.data.description
                }
            })
            .catch(err => {
                console.log(`the error: ${err}, occurred`)
            })
        document.getElementById('entry').value = ''
    }
}