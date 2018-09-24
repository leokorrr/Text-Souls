import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Form from './Form';
import Game from './Game';

class Registration extends Component {
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
    .then(
      fetch(`data/player/${player.playerName}`)
      .then((res)=>{return res.json()})
      .then((res)=>{
        if (res !== null){
          alert('User is already exists!');
        } else {
            this.setState({redirect: true});
        }
      })
      .catch(err => {
        console.log(err);
      })
    )
    .catch(err =>{
      console.log(err);
    })
  }

  getPlayer = () => {
    var player =  this.state.player;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/registration" render={()=>(!this.state.redirect ? (<Form createPlayer={this.createPlayer}/>) : (<Redirect to='/game'/>))} />
          <Route path="/game" component={(props) => <Game {...props} getPlayer={this.getPlayer}/>}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Registration;
