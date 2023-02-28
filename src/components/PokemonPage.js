import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [searched, setSearched] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then( r => r.json())
    .then(pokemon => setPokemon(pokemon))
  }, [])

  const dislpayedPokemon = pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(searched.toLowerCase()))

  function addNewPokemon(newPokemon){
    const updatedPokemon = [...pokemon, newPokemon]
    setPokemon(updatedPokemon)
  }


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemon={addNewPokemon}/>
      <br />
      <Search searched={searched} onSearch={setSearched} />
      <br />
      <PokemonCollection pokemon={dislpayedPokemon}/>
    </Container>
  );
}

export default PokemonPage;
