"use strict";

const api = "https://pokeapi.co/api/v2/pokemon?limit=50";

// capitalize the first character of a string
const capitalizeFirstChar = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// create pokemon card
const createPokemonCard = (card, pokemon) => {
  return (card.innerHTML = `
      <div class="pokemon-image">
        <img src="${pokemon.image}" alt="${pokemon.name}">
      </div>
      <div class="pokemon-info">
        <h2 class="pokemon-name">${capitalizeFirstChar(pokemon.name)}</h2>
        <p class="pokemon-type">${capitalizeFirstChar(pokemon.type)}</p>
      </div>
      <div class="pokemon-details">
        <p class="pokemon-height"><span>Height:</span> ${pokemon.height}</p>
        <p class="pokemon-weight"><span>Weight:</span> ${pokemon.weight}</p>
        <p class="pokemon-speed"><span>Speed:</span> ${pokemon.speed}</p>
        <p class="pokemon-experience"><span>Experience:</span> ${
          pokemon.experience
        }</p>
        <p class="pokemon-attack"><span>Attack:</span> ${pokemon.attack}</p>
        <p class="pokemon-ability"><span>Ability:</span> ${capitalizeFirstChar(
          pokemon.ability
        )}</p>
      </div>`);
};

// display pokemon data
const displayPokemon = (data) => {
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

// fetch pokemon data from API
const fetchPokemon = async () => {
  try {
    const response = await fetch(api);
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

fetchPokemon();
