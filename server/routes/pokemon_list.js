const express = require("express");
const router = express.Router();
const PokeCtrl = require("../controllers/pokemon_list_controller.js");

/* --------------[ ROUTER ]----------------- */

// [GET]
router.get("/pokemons", PokeCtrl.liste);
router.get("/pokemons/:id", PokeCtrl.onePokemon)
router.get("/attack/:id", PokeCtrl.attackPokemon)


// [POST]
router.post("/pokemons", PokeCtrl.insert);

module.exports = router;
