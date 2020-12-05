import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import DataBody from "./component/DataBody";
require("isomorphic-fetch");

class App extends Component {
  render() {
/*     fetch("http://localhost:4000/pokemons")
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("Bad response from server");
        }
        return res.json();
      })
      .then(function (data) {
        console.log(data);
      }); */

      return (
            <DataBody/>
      );  
  }
}

export default App;
