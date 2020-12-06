import React from "react";

const ListPokemons = ({ children }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="box center-align">{children}</div>
      </div>
    </div>
  );
};

export default ListPokemons;
