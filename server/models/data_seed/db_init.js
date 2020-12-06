const knex = require("knex");
const fs = require("fs");
const { error } = require("console");
const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "pokemon",
    useNullAsDefault: true,
  },
});
function pokemon_entity(db, Promise) {
  return Promise.all([
    db.schema.hasTable("pokemon_entity").then(function (exists) {
      if (!exists) {
        return db.schema
          .createTable("pokemon_entity", function (t) {
            t.string("id").primary(); // integer id

            // column
            t.string("couleur");
            t.string("espece");
            t.string("type");
            t.string("type1");
            t.string("type2");
            t.string("taille");
            t.string("poids");
            t.string("forme");
            t.string("pokemon");
            t.string("nomfr");
            t.string("nomen");
            t.string("nomtm");
            t.string("nomja");
            t.string("url");
          })
          .then(function () {
            //get JSON
            let pokemon;
            try {
              pokemon = JSON.parse(
                fs.readFileSync("pokedex.json", "utf8", (err, file) => {
                  if (err) throw "Error: can't read seed file : " + err;
                })
              );
            } catch (err) {
              console.error(err);
            }

            //data insertion
            for (let i = 0; i < pokemon.length; i++) {
              let pok = [
                {
                  id: pokemon[i].numéro,
                  espece: pokemon[i].espece,
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
                  url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"+ pokemon[i].numéro +".png"
                },
              ];
              try {
                db("pokemon_entity")
                  .insert(pok)
                  .then(() => console.log("data inserted"));
              } catch (err) {
                console.log("Error : " + err);
              }
            }
          });
      } else {
        console.log("Database already exist.");
      }
    }),
  ]);
}

function pokemon_attack(db, Promise) {
  return Promise.all([
    db.schema.hasTable("pokemon_attack").then(function (exists) {
      if (!exists) {
        return db.schema
          .createTable("pokemon_attack", function (t) {
            t.foreign("id_pokemon").references("pokemon_entity.id");
            t.string("id_pokemon"); // integer foreign key : id from pokemon

            // column
            t.string("niveau");
            t.string("nom");
            t.string("puissance");
            t.string("precision");
            t.string("pp");
          })
          .then(function () {
            //get JSON
            let pokemon;
            try {
              pokemon = JSON.parse(
                fs.readFileSync("pokedex.json", "utf8", (err, file) => {
                  if (err) throw "Error: can't read seed file : " + err;
                })
              );
            } catch (err) {
              console.error(err);
            }

            //data insertion

            for (let j = 0; j < pokemon.length; j++) {
              let att = 0;
              att = pokemon[j].attaques.length;
              for (let i = 0; i < att; i++) {
                let att = [
                  {
                    id_pokemon: pokemon[j].numéro,
                    niveau: pokemon[j].attaques[i].niveau,
                    nom: pokemon[j].attaques[i].nom,
                    puissance: pokemon[j].attaques[i].puissance,
                    precision: pokemon[j].attaques[i].precision,
                    pp: pokemon[j].attaques[i].pp,
                  },
                ];
                try {
                  db("pokemon_attack")
                    .insert(att)
                    .then(() => console.log("data inserted"));
                } catch (err) {
                  console.log("Error : " + err);
                }
              }
            }
          });
      } else {
        console.log("Data table already exist.");
      }
    }),
  ]);
}

pokemon_entity(db, Promise).then(() => {
  pokemon_attack(db, Promise);
});
