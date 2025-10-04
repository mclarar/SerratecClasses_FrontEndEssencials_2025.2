function obterPokemons(nomePokemon) {
   const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`;

   fetch(urlPokemon)
      .then(resposta => resposta.json())
      .then(data => {
         const pokemonCard = `
        <div class="pokemon-card">
            <h2>${data.name}</h2>     
            <p>Altura: ${data.height}</p>
             <p>Peso: ${data.weight}</p>
             <img src="${data.sprites.front_default}" alt="${data.name}"></img>
        </div>
        `;

         document.getElementById("pokemon_info").innerHTML += pokemonCard;
      })
      .catch(error => {
         console.log("Não foi possível capturar o Pokemon :( - culpa da pokebola", error);
      })
      .finally(() => {
         console.log("acabou o processo");
      });
}

window.onload = function () {
   const meusPokemons = [
      "charmander",
      "taurus",
      "haunter",
      "lucario",
      "fearow",
      "rayquasa",
      "wailord",
      "bastiodon",
      "mewtwo",
      "dragonite",
      "machamp",
      "ninetales",
      "magikarp",
      "lugia",
      "snorlax",
      "onix",
      "venusaur",
      "Jynx",
      "alakazam",
      "rattata",
   ];

   meusPokemons.forEach(pokemon => {
      obterPokemons(pokemon);
   });
};

// JSON - JavaScript Object Notation
// formato de dados leve, utilizado para transmitir dados entre um servidor e um client side (web)

//UPDATE - PUT || PATCH
//DELETE - DELETE
//CREATE - POST
//READ - GET/FETCH
