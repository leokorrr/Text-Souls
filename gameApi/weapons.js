var weapons = module.exports = {
    swords: {
        longSword: {
            name: 'sword',
            damage: 10,
            chances: {
                critical: 10
            },
            requirements: {
                strength: 5,
                dexterity: 2,
                intelegence: 1
            } 
        },
        shortSword: {
            name: 'Short Sword',
            damage: 7,
            chances: {
                critical: 10
            },
            requirements: {
                strength: 4,
                dexterity: 2,
                intelegence: 1
            } 
        },
        bigSword: {
            name: 'Big Sword',
            damage: 25,
            chances: {
                critical: 15
            },
            requirements: {
                strength: 8,
                dexterity: 5,
                intelegence: 2
            } 
        }
    },
    knifes: {
        knife: {
            name: 'Knife',
            damage: 5,
            chances: {
                critical: 15
            },
            requirements: {
                strength: 3,
                dexterity: 5,
                intelegence: 2
            } 
        },
        bloodyKnife: {
            name: 'Bloody Knife',
            damage: 4,
            chances: {
                critical: 25
            },
            requirements: {
                strength: 3,
                dexterity: 7,
                intelegence: 1
            } 
        },
        twinKnifes: {
            name: 'Twin Knife',
            damage: 9,
            chances: {
                critical: 30
            },
            requirements: {
                strength: 4,
                dexterity: 9,
                intelegence: 3
            } 
        }
    },
    stuffs: {
        stuff: {
            name: 'Stuff',
            damage: 1,
            chances: {
                critical: 2
            },
            requirements: {
                strength: 2,
                dexterity: 2,
                intelegence: 5
            } 
        },
        masterStuff: {
            name: 'Master Stuff',
            damage: 2,
            chances: {
                critical: 5
            },
            requirements: {
                strength: 2,
                dexterity: 2,
                intelegence: 7
            } 
        },
        grandmasterStuff: {
            name: 'Grandmaster Stuff',
            damage: 5,
            chances: {
                critical: 5
            },
            requirements: {
                strength: 3,
                dexterity: 4,
                intelegence: 10
            } 
        }
    }
}