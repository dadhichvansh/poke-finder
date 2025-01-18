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

const getPokemonData = async (api) => {
  const response = await fetch(api);
  const data = await response.json();
  console.log(data);
};

getPokemonData(api);
