"use strict";

const pokemonImage = document.getElementsByClassName("pokemon-image");
const pokemonName = document.getElementsByClassName("pokemon-name");
const pokemonType = document.getElementsByClassName("pokemon-type");
const pokemonHeight = document.getElementsByClassName("pokemon-height");
const pokemonWeight = document.getElementsByClassName("pokemon-weight");
const pokemonSpeed = document.getElementsByClassName("pokemon-speed");
const pokemonAttack = document.getElementsByClassName("pokemon-attack");
const pokemonAbility = document.getElementsByClassName("pokemon-ability");

const api = "https://pokeapi.co/api/v2/pokemon?limit=50";

const capitalizeFirstChar = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const displayPokemon = (data) => {
  const pokemon = data.map((pokemon) => {
    const name = pokemon.name;
    const type = pokemon.types[0].type.name;
    const height = pokemon.height;
    const weight = pokemon.weight;
    const speed = pokemon.stats[0].base_stat;
    const experience = pokemon.base_experience;
    const attack = pokemon.stats[1].base_stat;
    const ability = pokemon.abilities[0].ability.name;
    const image = pokemon.sprites.other.dream_world.front_default;

    return {
      name,
      type,
      height,
      weight,
      speed,
      experience,
      attack,
      ability,
      image,
    };
  });

  // select the container
  const container = document.querySelector(".container");
  container.innerHTML = ""; // clear any existing content

  pokemon.forEach((pokemon) => {
    // create a new pokemon card
    const card = document.createElement("div");
    card.classList.add("pokemon-card", "item");

    // add the HTML structure for the Pokémon card
    card.innerHTML = `
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
      </div>
    `;

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
