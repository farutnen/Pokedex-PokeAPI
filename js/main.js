const listaPokemon = document.querySelector("listaPokemon");
let URL ="https://pokeapi.co/api/v2/pokemon/";

for(let i=1; i<= 151; i++){
    fetch(URL + i)
        .then((response) => response.json())
        // Transformo el objeto en un JSON
        //para poder mostrarlo con la información que necesito
        .then ((data)=> mostrarPokemon(data))
}

function mostrarPokemon (data){

}