import React, { Component } from 'react'


import '../static/css/game.css';

export default class Game extends Component {

  state = {
    playerName: this.props.playerName,
    player: {
      playerName: 'Leon',
            playerClass: 'Rogue',
            weapon: {
                name: 'Knife',
                damage: '5',
                requirements: {
                    strength: 3,
                    dexterity: 5,
                    intelligence: 2
                }
            },
            stats:{
                strength: 3,
                dexterity: 5,
                intelligence: 2
            },
            chances:{
                evasion: 20,
                critical: 15
            }
    }
  }

  getPlayer = (e) => {
    e.preventDefault();
    fetch(`data/player/${this.state.playerName}`)
    .then((res)=>{return res.json()})
    .then((data)=>{
      if(data === null){
        alert('U should login first');

      } else {
        this.setState({player: data})
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Welcome to Text Souls!</h1>
        <h2>Click on button below to start</h2>

        <button onClick={this.getPlayer}>START</button>
        <div className="game-container">
          <div className="game"> 
            <div className="main">
              <div className="enemy-box">Enemy</div>
              <div className="game-logs">Logs</div>
              <div className="player-box">Player</div>
            </div>
            <div className="sidebar">
              <div className="player-name">
                  <div><h2>{this.state.player.playerClass} {this.state.player.playerName}</h2></div>
              </div>
              <div className="weapon">
                  <div><h3>Weapon: {this.state.player.weapon.name}</h3></div>
              </div>
              <div className="stats">
                  <div>
                      <ul>
                          <li>DMG: {this.state.player.weapon.damage}</li>
                          <li>EVS: {this.state.player.chances.evasion}</li>
                          <li>CRT: {this.state.player.chances.critical}</li>
                          <li>STR: {this.state.player.stats.strength}</li>
                          <li>DEX: {this.state.player.stats.dexterity}</li>
                          <li>INT: {this.state.player.stats.intelligence}</li>
                      </ul>
                  </div>
              </div>
              <div className="inventory">Inv-ry</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
