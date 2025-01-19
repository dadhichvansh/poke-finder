// fetch pokemon data from API
export const fetchPokemon = async (API_URL) => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    const pokemonData = data.results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const data = await response.json();

      return {
        name: data.name,
        type: data.types[0].type.name,
        height: data.height,
        weight: data.weight,
        speed: data.stats[0].base_stat,
        experience: data.base_experience,
        attack: data.stats[1].base_stat,
        ability: data.abilities[0].ability.name,
        image: data.sprites.other.dream_world.front_default,
      };
    });

    return await Promise.all(pokemonData); // return resolved pokemon data
  } catch (err) {
    console.error("Error fetching Pokémon data:", err);
  }
};
