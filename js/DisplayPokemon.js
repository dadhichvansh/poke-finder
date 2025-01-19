import { createPokemonCard } from "./CreatePokemonCard.js";

// display pokemon data
export const displayPokemon = (data) => {
  const pokemon = data.map((pokemon) => ({
    name: pokemon.name,
    type: pokemon.types[0].type.name,
    height: pokemon.height,
    weight: pokemon.weight,
    speed: pokemon.stats[0].base_stat,
    experience: pokemon.base_experience,
    attack: pokemon.stats[1].base_stat,
    ability: pokemon.abilities[0].ability.name,
    image: pokemon.sprites.other.dream_world.front_default,
  }));

  // select the container
  const container = document.querySelector(".container");

  pokemon.forEach((pokemon) => {
    const card = document.createElement("div");
    card.classList.add("pokemon-card");

    // add the HTML structure for the pokemon card
    createPokemonCard(card, pokemon);

    // append the card to the container
    container.appendChild(card);
  });
};
