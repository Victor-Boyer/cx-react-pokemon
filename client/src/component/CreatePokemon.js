/* import React, { Component } from "react";
import axios from "axios";

class CreatePokemon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nomfr: props.nomfr || "",
      nomen: props.nomen || ""
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeItem = this.onChangeItem.bind(this);
  }


  onSubmit(e) {
    e.preventDefault();

    const { nomfr, nomen } = this.state;

    axios.post("http://localhost:4000/pokemons", {
      nomfr: nomfr,
      nomen: nomen
    }).then((res) => {
      console.log('de');
    })
  }



  onChangeItem(e) {
/*     const target = event.target;
    const name = target.name; 
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { nomfr, nomen} = this.state;
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="nomfr">Nom FR</label>
            <input
              name="nomfr"
              type="text"
              className="form-control"
              id="nomfr"
              value={nomfr}
              onChange={this.onChangeItem}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nomen">Nom EN</label>
            <input
              name="nomen"
              type="text"
              className="form-control"
              id="nomen"
              value={nomen}
              onChange={this.onChangeItem}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreatePokemon; */

import React, { Component } from "react";
import axios from "axios";

class CreatePokemon extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      nomfr: "",
      nomen: "",
      nomja: "",
      couleur: "",
      type: "",
      taille: "",
      poids: "",
      forme: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  MakeId(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  onSubmit = (e) => {
    let idRandom = this.MakeId(25);
    e.preventDefault();
    // get our form data out of state
    const { nomfr, nomen, nomja } = this.state;

    axios
      .post("http://localhost:4000/pokemons", {
        nomfr: this.state.nomfr,
        nomen: this.state.nomen,
        nomja: this.state.nomja,
        couleur: this.state.couleur,
        type: this.state.type,
        taille: this.state.taille,
        poids: this.state.poids,
        forme: this.state.forme,
        id: idRandom,
      })
      .then((result) => {
        this.setState({
          loading: false,
        });
        console.log(result);
      });
  };

  render() {
    const {
      nomfr,
      nomen,
      nomja,
      couleur,
      type,
      taille,
      poids,
      forme,
    } = this.state;
    if (!this.state.loading) {
      return (
        <div class="row">
          <div class="col s12 m5">
            <div class="card-panel teal">
              <span class="white-text">Nouveau Pokemon dans le PokeDex !</span>
              <span class="white-text"><a href="./">Retourner au menu</a></span>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="nomfr">Nom du pokemon</label>
            <input
              name="nomfr"
              type="text"
              className="form-control"
              id="nomfr"
              value={nomfr}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="nomen">nom EN</label>
            <input
              name="nomen"
              type="text"
              className="form-control"
              id="nomen"
              value={nomen}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="nomja">nom JA</label>
            <input
              name="nomja"
              type="text"
              className="form-control"
              id="nomja"
              value={nomja}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="nomja">Couleur</label>
            <input
              name="couleur"
              type="text"
              className="form-control"
              id="couleur"
              value={couleur}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="nomja">Type</label>
            <input
              name="type"
              type="text"
              className="form-control"
              id="type"
              value={type}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="nomja">Taille</label>
            <input
              name="taille"
              type="text"
              className="form-control"
              id="type"
              value={taille}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="nomja">Poids</label>
            <input
              name="poids"
              type="text"
              className="form-control"
              id="type"
              value={poids}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="nomja">Forme</label>
            <input
              name="forme"
              type="text"
              className="form-control"
              id="type"
              value={forme}
              onChange={this.onChange}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreatePokemon;
