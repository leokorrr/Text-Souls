var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin123@ds257372.mlab.com:57372/text-souls', { useNewUrlParser: true });

var PlayerSchema = mongoose.Schema({
    playerName: String,
    playerClass: String,
    weapon: {
        name: String,
        damage: Number,
        requirements: {
            strength: Number,
            dexterity: Number,
            intelligence: Number
        }
    },
    stats:{
        strength: Number,
        dexterity: Number,
        intelligence: Number
    },
    chances:{
        evasion: Number,
        critical: Number
    }

});

var Player = module.exports = mongoose.model('Player', PlayerSchema);