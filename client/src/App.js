import React, { Component } from 'react';
import './App.css';

import Welcome from './components/Welcome';

class App extends Component {
  state = {
    player: {
      playerName: '',
      playerClass: ''
    }
  }

  getPlayer = e => {
    e.preventDefault();
    const playerName = e.target.elements.playerName.value;
    const playerClass = e.target.elements.playerClass.value;
    const player = {
      playerName: playerName,
      playerClass: playerClass
    }
    console.log(player);

    fetch('/data/player', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(player)
    })
    .then(res => res.json())
    .then(player => {
      console.log(player);
      this.setState({ player: player});
      console.log(this.state.player);
    })
    .catch(err =>{
      console.log(err);
      
    })

  }

  render() {
    return (
      <div className="App">
        <Welcome getPlayer={this.getPlayer}/>
      </div>
    );
  }
}

export default App;
