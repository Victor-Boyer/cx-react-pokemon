const db = require('../models/pokemon')


exports.liste = (req, res) => { 
    db.select('*').from('pokemon_entity').limit(10)
        .then((data) => {
            res.send(data);
        })
}