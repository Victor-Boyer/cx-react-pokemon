const knex = require('knex')
const fs = require('fs');
const { error } = require('console');
const db = knex({
    client: 'mysql',
    connection: {
    host : '127.0.0.1',
    user : 'root',
    password : 'root',
    database : 'pokemon'
  }
})


function up (knex1 ,knex, Promise) {
  return Promise.all([
      knex.schema.hasTable('pokemon_entity').then(function(exists) {
        if(!exists) {
          return knex.schema.createTable('pokemon_entity', function(t) {
            
            t.string('id').primary() // integer id

              // column
            t.string('couleur');
            t.string('espece');
            t.string('type');
            t.string('type1');
            t.string('type2');
            t.string('taille');
            t.string('poids');
            t.string('forme');
            t.string('pokemon');
            t.string('nomfr');
            t.string('nomen');
            t.string('nomtm');
            t.string('nomja');
          }).then(function () {
              //get JSON
              let pokemon
              try {
                pokemon = JSON.parse(fs.readFileSync('./data_seed/pokedextest.json', 'utf8', (err, file) => {
                if (err) throw 'Error: can\'t read seed file : ' + err
                }))
              } catch (err) {
                  console.error(err)
                }
              for(let i = 0; i < pokemon.length; i++) {
                console.log('test' + i);
                let pok = [
                  { 
                    id: pokemon[i].numéro,
                    couleur: pokemon[i].couleur,
                    type: pokemon[i].type,
                    type1: pokemon[i].type1,
                    type2: pokemon[i].type2,
                    nomfr: pokemon[i].nom
                  }
                ]

                knex1('pokemon_entity').insert(pok).then(() => console.log("data inserted")
                .catch((err) => {console.log(err); throw err})
                )



            }
              
            })
        }
        else {
          console.log('Database already exist.');
        }
      }),
  ]);
};

up(knex, db, Promise);