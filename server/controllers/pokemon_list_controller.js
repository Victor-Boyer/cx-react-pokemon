const db = require("../models/pokemon");

exports.liste = (req, res) => {
  db.select("*")
    .from("pokemon_entity")
    .then((data) => {
      res.send(data);
    });
};

exports.insert = (req, res) => {
  console.log(req.body);
  db.insert(req.body)
    .returning("*")
    .into("pokemon_entity")
    .then((data) => {
      res.send(data);
    });
};

exports.onePokemon = (req, res) => {
  console.log(req.params.id);
  db("pokemon_entity")
    .where({ id: req.params.id })
    .first()
    .then((data) => {
      res.send(data);
    });
};

exports.attackPokemon = (req, res) => {
  db("pokemon_attack")
  .where({ id_pokemon: req.params.id })
  .then((data) => {
    res.send(data);
  });
}
