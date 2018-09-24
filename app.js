// Require packages
var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Player = require('./models/playerSchema');


// Setting up routes variable
var indexRoute = require('./routes/index');
var classesRoute = require('./routes/classes');
var equipmentRoute = require('./routes/equipment');
var inventoryRoute = require('./routes/inventory');
var statsRoute = require('./routes/stats');
var playerRoute = require('./routes/player');

// Connectig to the database 
mongoose.connect('mongodb://admin:admin123@ds257372.mlab.com:57372/text-souls', { useNewUrlParser: true }, (err)=>{
    if (err) throw err;
    console.log('From app.js: database connected');
    
});

var db = mongoose.connection;

// Initializing app
var app = express();

// Setting view engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

// Setting up body parser middleware
app.use(bodyParser.json());

// Setting up routes
app.use('/', indexRoute);
app.use('/data', classesRoute);
app.use('/data', equipmentRoute);
app.use('/data', inventoryRoute);
app.use('/data', statsRoute);
app.use('/data', playerRoute);
app.get('/data/player/:name', function(req, res){
    Player.findOne({
        playerName: req.params.name
    }).exec(function(err, player){
        if(err){
            res.send('error')
        } else {
            res.json(player);
        }
    })
})

// Firing server 
var PORT = 4000;
app.listen(PORT, ()=>{
    console.log(`Backend is up :${PORT}`);
})