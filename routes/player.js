var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Player = require('../models/playerSchema');
var Class = require('../models/classSchema');

mongoose.connect('mongodb://admin:admin123@ds257372.mlab.com:57372/text-souls', { useNewUrlParser: true }, (err)=>{
    if (err) throw err;
    console.log('database connected');
    
});

playerArr = [];

router.get('/player', (req, res)=>{
    res.json({player: playerArr});
});

router.post('/player', (req, res)=>{
    const playerData = req.body
    
    function createPlayer(id){
        Class.findById(id)
            .exec((err, classObj)=>{
                if(err) throw err;
                setPlayerCharacter(playerData, classObj);
            })
    }

    function setPlayerCharacter(playerData, classObj){
        var player = new Player({
            playerName: playerData.playerName,
            playerClass: classObj.className,
            weapon: {
                name: classObj.startingWeapon.name,
                damage: classObj.startingWeapon.damage,
                requirements: {
                    strength: classObj.startingWeapon.requirements.strength,
                    dexterity: classObj.startingWeapon.requirements.dexterity,
                    intelligence: classObj.startingWeapon.requirements.intelligence
                }
            },
            stats:{
                strength: classObj.stats.strength,
                dexterity: classObj.stats.dexterity,
                intelligence: classObj.stats.intelligence
            },
            chances:{
                evasion: classObj.chances.evasion,
                critical: classObj.chances.critical
            }
        })
        player.save((err)=>{
            if(err) throw err;
            console.log(`Player ${player.playerName} was created`);
        })
    }

    switch(playerData.playerClass){
        case 'wizard':
            createPlayer('5b9b93f49a4ee46e7d6f5931');
            break;

        case 'rogue':
            createPlayer('5b9b93f49a4ee46e7d6f5930');
            break;

        case 'knight':
            createPlayer('5b9b93f49a4ee46e7d6f592f');
            break;

        default:
            console.log('U did it');
    }

    
})


module.exports = router;