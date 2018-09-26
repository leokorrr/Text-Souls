import React, { Component } from 'react'

export default class LoginForm extends Component {
  render() {
    return (
    <div>
        <form action="" method="POST" onSubmit={this.props.checkPlayer}>
            <label htmlFor="playerName">Enter your name:</label>
            <br/><br/>
            <input type="text" name="playerName" id="playerName"/>
            <br/><br/>
            <button type="Submit">Enter the game</button>
        </form>
    </div>
    )
  }
}
