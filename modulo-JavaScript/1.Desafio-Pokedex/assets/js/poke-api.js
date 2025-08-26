const pokeApi = {}

function convertePokemonApiDetailParaPokemon(pokeDetail){
  const pokemon = new Pokemon();

  pokemon.number = pokeDetail.id
  pokemon.name = pokeDetail.name

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
  const [type] = types

  pokemon.types = types
  pokemon.type = type

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

  return pokemon
}

pokeApi.getPokemonDetail = (pokemon) =>{
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertePokemonApiDetailParaPokemon)
}

pokeApi.getPokemon = (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

  return fetch(url)
//Arrow Function Expression
//No primeiro THEN, temos a "promessa" de receber uma resposta da URL, caso seja sucesso(Status Code: 200), iremos retornar essa reposta em JSON()
  .then((response) => response.json())

//O 2º THEN irá receber o return da 1º(then), que será a resposta em JSON() e retornará a promessa do results dela
  .then((responseBodyJson) => responseBodyJson.results)

// buscando detalhe dos pokemons
  .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
  .then((detailRequest) => Promise.all(detailRequest))
  .then((pokemonDetail) => pokemonDetail)

  .catch((error) => console.log(error))
}