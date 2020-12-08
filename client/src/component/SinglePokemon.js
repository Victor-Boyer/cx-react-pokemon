import React, { Component } from "react";
import axios from "axios";
import AttackPokemon from "./AttackPokemon";

class SinglePokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      pokemon: {},
      attack : {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get("http://localhost:4000/pokemons/" + id + "").then((res) => {
      this.setState({
        loading: false,
        pokemon: res.data
      });
       axios.get("http://localhost:4000/attack/"+ id +"").then((res) => {
        this.setState({
          loading: false,
          attack: res.data
        })
      })
    });
  }

  render() {
    if (this.state.loading === true) {
      return (
        <div class="progress">
        <div class="indeterminate"></div>
        </div>
      )
    }

    return (
      <div className="container">
        <div className="head box">
          <span class="white-text text-darken-2">
            <h1> {this.state.pokemon.nomfr} </h1>
          </span>
          <img className="card-img-top" src={this.state.pokemon.url} alt="Card image cap"/>
        </div>
      <div className="tab">
        <table className="striped infoTab">
          <tbody>
            <tr>
              <td>Couleur</td>
              <td>{this.state.pokemon.couleur}</td>
            </tr>
            <tr>
              <td>Espece</td>
              <td>{this.state.pokemon.espece}</td>
            </tr>
            <tr>
              <td>Type 1</td>
              <td>{this.state.pokemon.type1}</td>
            </tr>
            <tr>
              <td>Taille</td>
              <td>{this.state.pokemon.taille}</td>
            </tr>
            <tr>
              <td>Poids</td>
              <td>{this.state.pokemon.poids}</td>
            </tr>
            <tr>
              <td>Forme</td>
              <td>{this.state.pokemon.forme}</td>
            </tr>
          </tbody>
        </table>

        <table class="striped">
          <thead></thead>
          <tbody>
            <tr>
              <td>Pokémon</td>
              <td>{this.state.pokemon.nomfr}</td>
            </tr>
            <tr>
              <td>Nom FR</td>
              <td>{this.state.pokemon.nomfr}</td>
            </tr>
            <tr>
              <td>Nom EN</td>
              <td>{this.state.pokemon.nomen}</td>
            </tr>
            <tr>
              <td>Nom TM</td>
              <td>{this.state.pokemon.nomtm}</td>
            </tr>
            <tr>
              <td>Nom JA</td>
              <td>{this.state.pokemon.nomja}</td>
            </tr>
            <tr>
              <td>Forme</td>  
              <td>{this.state.pokemon.forme}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <table class="highlight">
        <tbody>
          <AttackPokemon id={this.state.pokemon.id}></AttackPokemon>
{/*           <tr>
            <th>Niveau</th>
            <th>{this.state.attack.niveau}</th>
          </tr>
          <tr>
            <td>Nom</td>
          <td><strong>{this.state.attack.nom}</strong></td>
          </tr>
          <tr>
            <td>Puissance</td>
            <td><strong>{this.state.attack.puissance}</strong></td>
          </tr>
          <tr>
            <td>Précision</td>
            <td><strong>{this.state.attack.precision}</strong></td>
          </tr>
          <tr>
            <td>PP</td>
            <td><strong>{this.state.attack.pp}</strong></td>
          </tr> */}
        </tbody>
      </table>
      </div>
    );
  }
}

export default SinglePokemon;
