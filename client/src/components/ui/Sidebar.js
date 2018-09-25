import React, { Component } from 'react'

import '../../static/css/game.css';

export default class Sidebar extends Component {

    state = {
        player: this.props.player
    }
  render() {
      if(this.state.player === '' || this.state.player === undefined){
          this.setState({
              player: {
                  playerName: '',
                  playerClass: '',
                  weapon: {
                      damage: '',
                      name: '',
                  },
                  stats: {
                      strength: '',
                      dexterity: '',
                      intelligence: ''
                  }
              }
          })
          
      }
    return (
      <div className="sidebar">
        <div className="player-name">
            <div><h2>{this.state.player.playerName}({this.state.player.playerClass})</h2></div>
        </div>
        <div className="weapon">
            <div><h2>{this.state.player.weapon.name}</h2></div>
        </div>
        <div className="stats">
            <div>
                <ul>
                    <li>DMG:{this.state.player.weapon.damage}</li>
                    <li>EVS:{this.state.player.chances.evasion}</li>
                    <li>CRT:{this.state.player.chances.critical}</li>
                    <li>STR:{this.state.player.stats.strength}</li>
                    <li>DEX:{this.state.player.stats.dexterity}</li>
                    <li>INT:{this.state.player.stats.intelligence}</li>
                </ul>
            </div>
        </div>
        <div className="inventory">Inv-ry</div>
      </div>
    )
  }
}
