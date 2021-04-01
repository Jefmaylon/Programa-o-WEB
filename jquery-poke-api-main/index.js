const API_URL = 'https://pokeapi.co/api/v2'

$(() => {
    const pokemonList = $('.pokemon-list')

    const renderPokemon = (pokemon) => {
        const formattedName = (pokemon.name).charAt(0).toUpperCase() + (pokemon.name).slice(1)
        pokemonList.append(`
            <div class="poke-card">
                <p>${formattedName}</p>
                <img src="${pokemon.sprites.front_default}" />
            </div>
        `)
    }

    const fetchApi = (resource, callback) => {
        $.ajax(`${API_URL}/${resource}`, {
            type: 'GET',
            success: callback,
            error: alert
        })
    }

    fetchApi('pokemon?limit=35', async res => {
        res.results.map(pokemon => {
            fetchApi(`pokemon/${pokemon.name}`, renderPokemon)
        })
    })
})