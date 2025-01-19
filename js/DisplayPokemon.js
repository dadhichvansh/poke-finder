import { createPokemonCard } from "./CreatePokemonCard.js";

// display pokemon data
export const displayPokemon = (data) => {
  // select the container
  const container = document.querySelector(".container");

  // error state handling
  if (data.length === 0) {
    container.innerHTML = "<h1>No Pokémon found!</h1>";
    return;
  }

  data.forEach((pokemon) => {
    const card = document.createElement("div");
    card.classList.add("pokemon-card");

    // add the HTML structure for the pokemon card
    createPokemonCard(card, pokemon);

    // append the card to the container
    container.appendChild(card);
  });
};
