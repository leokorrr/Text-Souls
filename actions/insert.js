var Class = require('../models/classSchema');
var mongo = require('mongodb');
var mongoose = require('mongoose');

var weapons = require('../gameApi/weapons');

console.log(weapons);


// Connectig to the database 
mongoose.connect('mongodb://admin:admin123@ds257372.mlab.com:57372/text-souls', { useNewUrlParser: true }, (err)=>{
    if (err) throw err;
    console.log('database connected');
    
});

var db = mongoose.connection;

var weaponCollection = db.collection('equipment');

// weaponCollection.insert(weapons.swords);
// weaponCollection.insert(weapons.knifes);
// weaponCollection.insert(weapons.stuffs);


var knight = new Class({
    className: 'Knight',
    startingWeapon: {
        name: weapons.swords.shortSword.name,
        damage: weapons.swords.shortSword.damage,
        requirements: weapons.swords.shortSword.requirements
    },
    stats:{
        strength: 4,
        dexterity: 2,
        intelligence: 1
    },
    chances:{
        evasion: 10,
        critical: weapons.swords.shortSword.chances.critical
    }
});

var rogue = new Class({
    className: 'Rogue',
    startingWeapon: {
        name: weapons.knifes.knife.name,
        damage: weapons.knifes.knife.damage,
        requirements: weapons.knifes.knife.requirements
    },
    stats:{
        strength: 3,
        dexterity: 5,
        intelligence: 2
    },
    chances:{
        evasion: 20,
        critical: weapons.knifes.knife.chances.critical
    }
});

var wizard = new Class({
    className: 'Wizard',
    startingWeapon: {
        name: weapons.stuffs.stuff.name,
        damage: weapons.stuffs.stuff.damage,
        requirements: weapons.stuffs.stuff.requirements
    },
    stats:{
        strength: 2,
        dexterity: 2,
        intelligence: 5
    },
    chances:{
        evasion: 15,
        critical: weapons.stuffs.stuff.chances.critical
    }
});

// knight.save((err)=>{
//     if(err) throw err;
//     console.log(`New class: ${knight.className} was succesfully added`);
// });

// rogue.save((err)=>{
//     if(err) throw err;
//     console.log(`New class: ${rogue.className} was succesfully added`);
// });

// wizard.save((err)=>{
//     if(err) throw err;
//     console.log(`New class: ${wizard.className} was succesfully added`);
// });