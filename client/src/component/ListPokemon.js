import React from 'react';

const ListPokemon = ({title, number, pic, children}) => {
    return (
        <div className="card">
        <img className="card-img-top" src={pic} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{children}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default ListPokemon;