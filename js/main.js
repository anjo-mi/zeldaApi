document.getElementById('entry').addEventListener('keypress', getEntry)

let monster = document.querySelector('.monster')
let equip = document.querySelector('.equip')
let material = document.querySelector('.material')
let creature = document.querySelector('.creature')
let treasure = document.querySelector('.treasure')

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
        monster.classList.remove('hidden')
    }
    if (category === 'equipment'){
        equip.classList.remove('hidden')
    }
    if (category === 'materials'){
        material.classList.remove('hidden')
    }
    if (category === 'creatures'){
        creature.classList.remove('hidden')
    }
    if (category === 'treasure'){
        treasure.classList.remove('hidden')
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
                monster.classList.add('hidden')
                equip.classList.add('hidden')
                material.classList.add('hidden')
                creature.classList.add('hidden')
                treasure.classList.add('hidden')
                showAndHide(category)
                console.log(data)
                if (category === 'monsters'){
                    document.querySelector('.monster>.basicInfo>.category').textContent = data.data.category
                    document.querySelector('.monster>.basicInfo>.img').src = data.data.image
                    document.querySelector('.monster>.basicInfo>.name').textContent = data.data.name
                    if (data.data.common_locations){
                        document.querySelector('.monster>.location').textContent = data.data.common_locations.join(', ')
                    }else {
                        document.querySelector('.monster>.location').textContent = 'For you to Find'
                    }
                    document.querySelector('.monster>.drops').textContent = data.data.drops.join(', ')
                    document.querySelector('.monster>.details').textContent = data.data.description
                }
                if (category === 'equipment'){
                    document.querySelector('.equip>.basicInfo>.category').textContent = data.data.category
                    document.querySelector('.equip>.basicInfo>.img').src = data.data.image
                    document.querySelector('.equip>.basicInfo>.name').textContent = data.data.name
                    if (data.data.common_locations){
                        document.querySelector('.equip>.location').textContent = data.data.common_locations.join(', ')
                    }else {
                        document.querySelector('.equip>.location').textContent = 'For you to Find'
                    }
                    document.querySelector('.equip>.details').textContent = data.data.description
                    if (data.data.properties.attack){    
                        document.querySelector('.equip>.attOrDef').textContent = data.data.properties.attack
                        document.querySelector('.equip>.attOrDef').style.color = 'green'
                    }else{
                        document.querySelector('.equip>.attOrDef').textContent = data.data.properties.defense
                        document.querySelector('.equip>.attOrDef').style.color = 'red'

                    }
                }
                if (category === 'materials'){
                    document.querySelector('.material>.basicInfo>.category').textContent = data.data.category
                    document.querySelector('.material>.basicInfo>.img').src = data.data.image
                    document.querySelector('.material>.basicInfo>.name').textContent = data.data.name
                    if (data.data.common_locations){
                        document.querySelector('.material>.location').textContent = data.data.common_locations.join(', ')
                    }else {
                        document.querySelector('.material>.location').textContent = 'For you to Find'
                    }
                    document.querySelector('.material>.details').textContent = data.data.description
                    document.querySelector('.material>.cooked').textContent = `Cooking Effects: ${data.data.cooking_effect}`
                    document.querySelector('.material>.recovery').textContent = `${data.data.hearts_recovered} Hearts Recovered (Raw)`
                }
                if (category === 'creatures'){
                    document.querySelector('.creature>.basicInfo>.category').textContent = data.data.category
                    document.querySelector('.creature>.basicInfo>.img').src = data.data.image
                    document.querySelector('.creature>.basicInfo>.name').textContent = data.data.name
                    if (data.data.common_locations){
                        document.querySelector('.creature>.location').textContent = data.data.common_locations.join(', ')
                    }else {
                        document.querySelector('.creature>.location').textContent = 'For you to Find'
                    }
                    document.querySelector('.creature>.details').textContent = data.data.description
                    if (data.data.edible){
                        document.querySelector('.creature>.cooked').textContent = data.data.cooking_effect
                        document.querySelector('.creature>.recovery').textContent = `${data.data.hearts_recovered} Heart(s) Recovered (Raw)`
                    }
                }
                if (category === 'treasure'){
                    document.querySelector('.treasure>.basicInfo>.category').textContent = data.data.category
                    document.querySelector('.treasure>.basicInfo>.img').src = data.data.image
                    document.querySelector('.treasure>.basicInfo>.name').textContent = data.data.name
                    if (data.data.common_locations){
                        document.querySelector('.treasure>.location').textContent = data.data.common_locations.join(', ')
                    }else {
                        document.querySelector('.treasure>.location').textContent = 'For you to Find'
                    }
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