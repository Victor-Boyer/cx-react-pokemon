const knex = require('knex')
const db = knex({
    client: 'pg',
    connection: {
    host : '127.0.0.1',
    user : 'root',
    password : 'root',
    database : 'pokemon',
    useNullAsDefault: true
  }
})


const PokemonEntity  = class {
    constructor () {}
    
    selectPokemon() {
        db.select('nomfr', 'id').from('pokemon_entity').limit(10)
        .then(data => console.log(data))
    }
}


module.exports = PokemonEntity;