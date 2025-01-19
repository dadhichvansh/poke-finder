"use strict";

import { fetchPokemon } from "./js/FetchPokemon.js";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=50";
const main = () => {
  fetchPokemon(API_URL);
};

main();
