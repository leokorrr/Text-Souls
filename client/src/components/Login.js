import React, { Component } from 'react'

export default class Login extends Component {

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
            this.setState({redirect: true})
        } else {
            alert('there is no user with this name');
        }
    })
}

  render() {
    return (
      <div>
        <form action="" method="POST" onSubmit={this.checkPlayer}>
        <label htmlFor="playerName">Enter your name:</label>
          <br/><br/>
          <input type="text" name="playerName" id="playerName"/>
          <br/><br/>
          <button type="Submit">Start!</button>
        </form>
      </div>
    )
  }
}
