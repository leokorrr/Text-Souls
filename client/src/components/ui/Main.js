import React, { Component } from 'react'


import '../../static/css/game.css';

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="enemy-box">Enemy</div>
        <div className="game-logs">Logs</div>
        <div className="player-box">Player</div>
      </div>
    )
  }
}
