import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import LoginForm from './LoginForm';
import Game from './Game';

export default class Login extends Component {

  state = {
    playerName: '',
    redirect: false
  }

checkPlayer = e => {
    e.preventDefault();
    
    var playerName = e.target.elements.playerName.value;
    // change this to form validation
    if(playerName === ''){
        playerName = 'aaadfhadkhfjsfgkhasfjgkdfhgl;sfhgbsfjgkhfshgsf';
    }
    fetch(`data/player/${playerName}`)
    .then((res)=>{return res.json()})
    .then((res)=>{
        if(res !== null){
            this.setState({playerName: playerName, redirect: true})
            
        } else {
            alert('there is no user with this name');
        }
    })
}

s

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" render={()=>(!this.state.redirect ? (<LoginForm checkPlayer={this.checkPlayer}/>) : (<Redirect to='/game'/>))} />
          
          <Route path="/game" component={()=><Game sendPlayer={this.sendPlayer} playerName={this.state.playerName}/>}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
