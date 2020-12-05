import React from 'react';

const ListPokemon = ({children}) => { 
    return (
        <li className="list-group-item">
            {children}
        </li>
    )
}

export default ListPokemon;