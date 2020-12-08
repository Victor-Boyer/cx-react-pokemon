import React from 'react';

const ListPokemon = ({title, pic, children, id}) => {
    return (
         <div className="card blue-grey darken-1">
        <img className="card-img-top" src={pic} alt="Card image cap"/>
            <div className="card-content white-text">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{children}</p>
                <a href={id} className="btn btn-primary">Détail</a>
            </div>  
        </div>
    )
}

export default ListPokemon;