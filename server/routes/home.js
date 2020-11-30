const express = require('express');
const router = express.Router();
const homeCtrl = require('../controllers/homeController.js')


/* --------------[ ROUTER ]----------------- */

// Page d'accueil [GET]
router.get('/test', homeCtrl.home)



module.exports = router;