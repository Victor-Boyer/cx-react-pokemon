import React from "react";
import ListPokemons from "./ListPokemons";

const ListAttacks = ({ children }) => {
  return (
    <div className="row">
      <h5>Attaques : </h5>
      <table className="center-align col s12">
        <tr>
          <th>Attr</th>
          <th>Valeur</th>
        </tr>
        {children}
      </table>
    </div>
  );
};

export default ListAttacks;
