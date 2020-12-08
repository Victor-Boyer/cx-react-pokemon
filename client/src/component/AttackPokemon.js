import React, { Component } from "react";
import axios from "axios";
import ListAttacks from "./ListAttacks";
import ListAttack from "./ListAttack";

class AttackPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      loading: true,
      attacks: {},
    };
  }

  componentDidMount() {
    const id = this.props.id;
    axios.get("http://localhost:4000/attack/" + id + "").then((res) => {
      this.setState({
        loading: false,
        attacks: res.data,
      });
    });
  }

  render() {
    if (this.state.loading === true) {
      return <h1>Loading...</h1>;
    }
    //for (let i = 0; i < this.state.attacks.length; i++) {
    console.log("test");
    console.log(this.state.attacks);
    return (
      <ListAttacks>
        {this.state.attacks.map((attack) => (
          <ListAttack
            niveau={attack.niveau}
            nom={attack.nom}
            puissance={attack.puissance}
            precision={attack.precision}
            pp={attack.pp}
          ></ListAttack>
        ))}
      </ListAttacks>
    );
    //}
  }
}

export default AttackPokemon;
