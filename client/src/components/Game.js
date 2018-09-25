import React, { Component } from 'react'

import Main from './ui/Main';
import Sidebar from './ui/Sidebar';

import '../static/css/game.css';

export default class Game extends Component {

  state = {
    playerName: this.props.playerName,
    player: ''
  }

  getPlayer = e => {
    e.preventDefault();

    fetch(`data/player/${this.state.playerName}`)
    .then((res)=>{return res.json()})
    .then((data)=>{
      this.setState({player: data})
      console.log(this.state.player)
    })
  }
  render() {
    return (
      <div>
        <h1>Welcome to Text Souls!</h1>
        <button className="start-btn" onClick={this.getPlayer}>Start</button>
        <div className="game-container">
          <div className="game">
            <Main />
            <Sidebar player={this.state.player}/>
          </div>
        </div>
      </div>
    )
  }
}
