import React from "react";
import { Card } from "semantic-ui-react";

function Pokemon(props) {
  console.log("pokemon.js props:", props);
  return (
    <div className="poke-card">
      <img src={props.poke.sprites.front_default} />
      <Card.Meta>No.{props.poke.id}</Card.Meta>
      <Card.Header>{props.poke.name}</Card.Header>
      <Card.Content>
        {props.poke.stats.map((stat, index) => {
          return (
            <div key={index}>
              <span className="pokemon-stat">{stat.stat.name}:</span>{" "}
              {stat.base_stat}
            </div>
          );
        })}
      </Card.Content>
    </div>
  );
}

export default Pokemon;
