alert('Warning Entering Pokemon API')
document.querySelector('button').addEventListener('click', getPokemonDetails)

async function getPokemonDetails() {
    const PokemonNameInfo = document.querySelector('input').value
    try {
        const response = await fetch(`https://rsp-pokemon-api.herokuapp.com/api/pokemon/${PokemonNameInfo}`)
        const data = await response.json()
        console.log(data)
        document.querySelector('h2').innerText = data.Name
        document.querySelector('h3').innerText = data.Number
        document.querySelector('h4').innerText = data.Type
        document.querySelector('h5').innerText = data.Type2
        document.querySelector('h6').innerText = data.Species

    } catch (err) {
        console.log(err)
    }

}