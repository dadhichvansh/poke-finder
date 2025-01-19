// create pokemon card
export const createPokemonCard = (card, pokemon) => {
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

// capitalize the first character of a string
const capitalizeFirstChar = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};
