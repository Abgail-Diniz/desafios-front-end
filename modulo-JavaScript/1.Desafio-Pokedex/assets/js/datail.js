const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(res => res.json())
  .then(data => {
    document.body.innerHTML += `<h1>${data.name}</h1>`;
    document.body.innerHTML += `<img src="${data.sprites.front_default}" />`;
  });