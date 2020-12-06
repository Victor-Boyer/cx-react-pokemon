import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import DataBody from "./component/DataBody";
import SinglePokemon from "./component/SinglePokemon";
import CreatePokemon from "./component/CreatePokemon";
import NavBar from "./component/NavBar";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
require("isomorphic-fetch");

class App extends Component {
  render() {
      return (
        <BrowserRouter>
        <div>
          <NavBar></NavBar>
          <Switch>

            <Route exact path="/create" component={CreatePokemon}/>
            <Route exact path="/:id" component={SinglePokemon}/>
            <Route exact path="/" component={DataBody}/>

          </Switch>
        </div>
        </BrowserRouter>
      );  
  }
}

export default App;
