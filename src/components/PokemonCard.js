import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [frontSprite, setFrontSprite] = useState(true)
  const { name, hp, sprites }= pokemon

  function handleClick(){
    setFrontSprite(!frontSprite)
  }

  return (
    <Card>
      <div>
        <div className="image">
          {frontSprite ? <img alt="oh no!" src={sprites.front} onClick={handleClick}/> : <img alt="oh no!" src={sprites.back} onClick={handleClick}/> }
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
