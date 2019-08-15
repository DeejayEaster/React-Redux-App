import React from "react";
import Loader from "react-loader-spinner";
import Pokemon from "./Pokemon";
import { connect } from "react-redux";
import { getData } from "../store/actions";

const PokemonList = props => {
  return (
    <>
      <div className="card-container">
        <button onClick={props.getData}>
          {props.isLoading ? (
            <Loader type="TailSpin" color="#00BFFF" height="15" width="100" />
          ) : (
            "Get Pokemon Data"
          )}
        </button>
        {props.pokemon &&
          props.pokemon.map(mon => <Pokemon poke={mon} key={mon.name} />)}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    isLoading: state.isLoading,
    pokemon: state.pokemon
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(PokemonList);
