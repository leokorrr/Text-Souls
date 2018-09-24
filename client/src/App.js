import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Welcome from './components/Welcome';
import Game from './components/Game';

class App extends Component {
  state = {
    player: {
      playerName: '',
      playerClass: ''
    },
    redirect: false
  }
  
  
  createPlayer = e => {
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
      this.setState({ player: player });
    })
    .catch(err =>{
      console.log(err);
    })
    this.setState({redirect: true});
  }

  getPlayer = () => {
    var player =  this.state.player;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={()=>(!this.state.redirect ? (<Welcome createPlayer={this.createPlayer}/>) : (<Redirect to='/game'/>))} />
          <Route path="/game" component={(props) => <Game {...props} getPlayer={this.getPlayer}/>}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
