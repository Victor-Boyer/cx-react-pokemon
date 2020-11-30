const bodyParser = require('body-parser')

/* --------------[ INCLUDE ROUTER ]----------------- */
const homeRoutes = require('./routes/home');


const express = require('express');
const app = express();


app.use(express.static('public'))
app.set('view engine', '/view/')


/* -[ HOME ROUTER ]- */

app.use('/home/', homeRoutes);



/* -[ Error 404 ]- */
app.get('*', (req, res) => {
    res.status(404).render('index.pug')
})


module.exports = app;