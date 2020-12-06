import axios from 'axios';
import React, { Component } from "react";
import ListPokemons from "./ListPokemons";
import ListPokemon from "./ListPokemon";

class DataBody extends Component {
    //initialize props and class status
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      pokemons: {},
    };
  }

  //get data from API 
  componentDidMount() {
    axios.get("http://localhost:4000/pokemons"  ).then(res => {
      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }
      this.setState({
        loading: false,
        pokemons: res.data
      });
    });
  }

  //html returned by the class
  render() {
    if (this.state.loading === true) {
      return (
        <div class="progress">
        <div class="indeterminate"></div>
        </div>
      )
    }

    return (
      <ListPokemons>
        { this.state.pokemons.map(pokemon => <ListPokemon title={pokemon.nomfr} number={pokemon.id} pic={pokemon.url} id={pokemon.id}>{pokemon.id}</ListPokemon>)}
      </ListPokemons>
    );
  }
}

export default DataBody;
