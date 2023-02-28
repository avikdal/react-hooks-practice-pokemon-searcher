import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addNewPokemon }) {
  const [newPokemon, setNewPokemon] = useState({
    name: "",
    hp: 0,
    frontUrl: "",
    backUrl: "",
  })

  function handleChange(e){
    console.log(e.target.name)
    console.log(e.target.value)

    setNewPokemon({
      ...newPokemon,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e){
    e.preventDefault()

    const createdPokemon = {
      name: newPokemon.name,
      hp: newPokemon.hp,
      sprites: {
        front: newPokemon.front,
        back: newPokemon.back,
      }
    }

    
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createdPokemon),
    })
    .then(r => r.json())
    .then(pokemon => addNewPokemon(pokemon))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            value={newPokemon.name}
            onChange={handleChange}
          />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp" 
            value={newPokemon.hp}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newPokemon.frontUrl}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newPokemon.backUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
