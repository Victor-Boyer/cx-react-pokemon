import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
require('isomorphic-fetch');

class App extends Component {
  constructor () {
    super()

  }
  render() {
    fetch('http://localhost:4000/pokemons').then((res) => {
      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }
      return res.json();
    }).then(function(data) {
      console.log(data);
  });
    
    return (
      <div className="card"> 
        <div className="card">
          <h5 className="card-title"></h5>
          <h6 className="card-subtitle mb-2 text-muted">steve@apple.com</h6>
        </div>
      </div>
    );
  }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
