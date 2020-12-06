import React, { Component } from "react";

class NavBar extends Component {
    render() {
        return (
            <nav>
            <div className="nav-wrapper">
            <a href="/" class="brand-logo center">POKEDEX</a>
              <ul className="left hide-on-med-and-down">
                <li><a href="./create">Ajouter un pokemon</a></li>
              </ul>
            </div>
          </nav>
        );
      }
}

export default NavBar