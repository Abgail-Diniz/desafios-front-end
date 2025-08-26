const  maxRecords = 493;
const limit = 10;
let offset = 387;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
const loadMoreButton = document.getElementById('loadMoreButton')


const pokemonsList = document.getElementById("pokemonList");

//O 3º THEN irá receber do responseBodyJson, a parte do Resultados, onde tem a lista dos pokemons em Array

function loadPokemonItens(offset, limit){
  pokeApi.getPokemon(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map((pokemon) =>  
    `
      <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        
        <div class="detail">
          <ol class="types">
            ${pokemon.types.map((type) => 
              `<li class="type ${type}">${type}</li>`).join('')}
              <li class="linkDetail ${pokemon.type}">
                <a href="detail.html?id=${pokemon.number}">Detalhes</a>
              </li>
              
          </ol>
          <img src="${pokemon.photo}" alt="${pokemon.name}">
          
        </div>
      </li>
    `).join('')

    pokemonsList.innerHTML += newHtml
  })
}

loadPokemonItens(offset,limit)

loadMoreButton.addEventListener('click', () => {
  offset += limit
  const qtdRecordsWithNexPage = offset + limit

  if (qtdRecordsWithNexPage >= maxRecords) {
      const newLimit = maxRecords - offset
      loadPokemonItens(offset, newLimit)
      loadMoreButton.style.display = "none" // mais simples que removeChild
      // loadMoreButton.parentElement.removeChild(loadMoreButton)
  } else {
      loadPokemonItens(offset, limit)
  }

  // offset += limit
  // loadPokemonItens(offset,limit)
})