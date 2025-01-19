import { displayPokemon } from "./DisplayPokemon.js";

// fetch pokemon data from API
export const fetchPokemon = async (API_URL) => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    const pokemonData = data.results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const data = await response.json();

      return data;
    });

    const allPokemonData = await Promise.all(pokemonData);
    displayPokemon(allPokemonData);
  } catch (err) {
    console.log(err);
  }
};
