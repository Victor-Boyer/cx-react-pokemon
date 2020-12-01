const knex = require('knex')
const fs = require('fs');
const { error } = require('console');
const db = knex({
    client: 'mysql',
    connection: {
    host : '127.0.0.1',
    user : 'root',
    password : 'root',
    database : 'pokemon',
    useNullAsDefault: true
  }
})


function up (db, Promise) {
  return Promise.all([
      db.schema.hasTable('pokemon_entity').then(function(exists) {
        if(!exists) {
          return db.schema.createTable('pokemon_entity', function(t) {
            
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
                pokemon = JSON.parse(fs.readFileSync('./data_seed/pokedex.json', 'utf8', (err, file) => {
                if (err) throw 'Error: can\'t read seed file : ' + err
                }))
              } catch (err) {
                  console.error(err)
                }
              
              //data insertion
              for(let i = 0; i < pokemon.length; i++) {
                let pok = [
                  { 
                    id: pokemon[i].numéro,
                    espece: pokemon[i].numéro,
                    couleur: pokemon[i].couleur,
                    type: pokemon[i].type,
                    type1: pokemon[i].type1,
                    type2: pokemon[i].type2,
                    taille: pokemon[i].taille,
                    poids: pokemon[i].poids,
                    forme: pokemon[i].forme,
                    pokemon: pokemon[i].pokemon,
                    nomfr: pokemon[i].nom,
                    nomen: pokemon[i].nomen,
                    nomtm: pokemon[i].nomtm,
                    nomja: pokemon[i].nomja,
                  }
                ]
                try {
                  db('pokemon_entity').insert(pok).then(() => console.log("data inserted"))
                }catch (err) {
                  console.log('Error : ' + err);
                }
            }
              
            })
        }
        else {
          console.log('Database already exist.');
        }
      }),
  ]);
};


up(db, Promise);