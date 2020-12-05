import React from 'react';

const ListPokemons = ({ children }) => { 
    return (
        <ul className="list-group">
            {children}
        </ul>
    )
}

export default ListPokemons;