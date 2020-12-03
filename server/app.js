const bodyParser = require('body-parser')


/* --------------[ INCLUDE ROUTER ]----------------- */
const pokeRoutes = require('./routes/pokemon_list');


const express = require('express');
const app = express();


app.use(express.static('public'))
app.set('view engine', '/view/')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
/* -[ HOME ROUTER ]- */

app.get('/pokemons', pokeRoutes);



/* -[ Error 404 ]- */
/* app.get('*', (req, res, next) => {
    console.log('Error 404')
    res.status(404)
}) */


module.exports = app;