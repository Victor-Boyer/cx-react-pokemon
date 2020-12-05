import axios from 'axios';
import React, { Component } from "react";
import ListPokemons from "./ListPokemons";
import ListPokemon from "./ListPokemon";
import _fetch from 'isomorphic-fetch';

class DataBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      pokemons: {},
    };
  }

  componentDidMount() {
    axios.get("http://localhost:4000/pokemons"  ).then(res => {
      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }
      console.log(res.data);
      this.setState({
        loading: false,
        pokemons: res.data
      });
    });
  }

  render() {
    if (this.state.loading === true) {
      return <h1>Loading...</h1>;
    }

    return (
      <ListPokemons>
        { this.state.pokemons.map(pokemon => <ListPokemon title={pokemon.nomfr} number={pokemon.id} pic={pokemon.url}>{pokemon.id}</ListPokemon>)}
      </ListPokemons>
    );
  }
}

export default DataBody;
