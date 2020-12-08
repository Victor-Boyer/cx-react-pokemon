import React from "react";
import ListAttacks from "./ListAttacks";

const ListAttack = ({ niveau, nom, puissance, precision, pp }) => {
  return (
    <tbody>
      <td className="#757575 grey darken-1">Nom</td>
      <td className="#757575 grey darken-1">
        <strong>{nom}</strong>
      </td>
      <tr>
        <td>Niveau</td>
        <td>{niveau}</td>
      </tr>
      <tr></tr>
      <tr>
        <td>Puissance</td>
        <td>
          <strong>{puissance}</strong>
        </td>
      </tr>
      <tr>
        <td>Précision</td>
        <td>
          <strong>{precision}</strong>
        </td>
      </tr>
      <tr>
        <td>PP</td>
        <td>
          <strong>{pp}</strong>
        </td>
      </tr>
    </tbody>
  );
};

export default ListAttack;
