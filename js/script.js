const PokemonName = document.querySelector('.pokemon_name');




const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await APIResponse.json();
    return data;
}

const renderPokemon = async (pokemon) => {
    const data = fetchPokemon(pokemon);

    PokemonName.innerHTML = data.name;



}

renderPokemon('25')