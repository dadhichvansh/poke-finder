"use strict";

import { displayPokemon } from "./js/DisplayPokemon.js";
import { fetchPokemon } from "./js/FetchPokemon.js";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=50";
const allPokemon = [];

// search functionality
const searchPokemon = () => {
  const input = document.getElementById("pokemon-search");

  // trigger search on input change
  input.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredPokemon = allPokemon.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm)
    );

    displayPokemon(filteredPokemon); // re-render pokemon cards with filtered data
  });
};

const main = () => {
  fetchPokemon(API_URL).then((pokemonData) => {
    allPokemon.push(...pokemonData);
    displayPokemon(allPokemon);
    searchPokemon();
  });
};

main();
