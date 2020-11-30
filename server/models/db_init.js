const knex = require('knex')
const fs = require('fs');
const { error } = require('console');

function getKeys(key, pokemon) {
  var obj = pokemon[key],
      keys = [];
  if(Object.keys) {
      keys = Object.keys(obj);
  } else {
      for(var k in obj) {
          keys.push(k);
      }
  }
  return keys;
}

const db = knex({
    client: 'mysql',
    connection: {
    host : '127.0.0.1',
    user : 'root',
    password : 'root',
    database : 'pokemon'
  }
})

db.schema.hasTable('pokemon_entity').then(function(exists) {
  if (!exists) {
  let pokemon
  try {
      pokemon = JSON.parse(fs.readFileSync('./data_seed/pokedextest.json', 'utf8', (err, file) => {
                      if (err) throw 'Error: can\'t read seed file' + err
                    }))
    } catch (err) {
      console.error(err)
    }
    //console.log(pokemon);
    console.log(getKeys('0', pokemon));
    
    console.log('BD not exist')

    /* return knex.schema.createTable('pokemon_entity', function(t) {

    t.increments('id').primary();
    t.string('numéro');
    t.string('nom');
    t.string('nomen');
    t.string('nomja');
    t.string('nomtm');
    t.string('nomde');
    t.string('legende');
    t.string('ndex');
    t.string('jdex');
    t.string('njdex');
    t.string('hdex');
    t.string('fdex');
    t.string('odex');
    t.string('opdex');
    t.string('espece');
    t.string('taille');
    t.string('poids');
    t.string('fmratio');
    t.string('oeufpas');
    t.string('effortval');
    t.string('type1');
    t.string('type2');
    t.string('expval');
    t.string('expmax');
    t.string('captureval');
    t.string('groupoeuf1');
    t.string('groupoeuf2');
    t.string('capspe1');
    t.string('capspe2');
    t.string('capspe2-reve');
    t.string('couleur');
    t.string('forme');
    t.string('pokemon');
    t.string('numero'); 
    }); */
  }
})