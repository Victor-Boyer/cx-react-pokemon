const { render } = require('../app');
const Pokemon = require('../models/pokemon')


exports.liste = (req, res) => {
    const pokemon = new Pokemon()
    let data = pokemon.selectPokemon();
    res.data
    res.status(201)
}