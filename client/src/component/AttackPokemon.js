import React, { Component } from "react";
import axios from "axios";

class AttackPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: props.id,
      loading: true,
      attack: {},
    };
  }

  componentDidMount() {
    const id = this.props.id;
    axios.get("http://localhost:4000/attack/" + id + "").then((res) => {
      this.setState({
        loading: false,
        attack: res.data,
      });
    });
  }

  render() {
    if (this.state.loading === true) {
      return <h1>Loading...</h1>;
    }
    for (let i = 0; i < this.state.attack.length; i++) {
      return (
        <table class="highlight">
          <tbody>
            <tr>
              <th>Niveau</th>
              <th>{this.state.attack.niveau}</th>
            </tr>
            <tr>
              <td>Nom</td>
              <td>
                <strong>{this.state.attack.nom}</strong>
              </td>
            </tr>
            <tr>
              <td>Puissance</td>
              <td>
                <strong>{this.state.attack.puissance}</strong>
              </td>
            </tr>
            <tr>
              <td>Précision</td>
              <td>
                <strong>{this.state.attack.precision}</strong>
              </td>
            </tr>
            <tr>
              <td>PP</td>
              <td>
                <strong>{this.state.attack.pp}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      );
    }
  }
}

export default AttackPokemon;
