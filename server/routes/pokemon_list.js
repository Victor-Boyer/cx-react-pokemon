const express = require('express');
const router = express.Router();
const PokeCtrl = require('../controllers/pokemon_list_controller.js')


/* --------------[ ROUTER ]----------------- */

// Page d'accueil [GET]
router.get('/pokemons', PokeCtrl.liste)



module.exports = router;