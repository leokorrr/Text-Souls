import React, { Component } from 'react'

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <form action="" method="POST" onSubmit={this.props.getPlayer}>
          <label htmlFor="playerName">Enter your name:</label>
          <br/>
          <input type="text" name="playerName" id="playerName"/><br/><br/>
          <input type="radio" name="playerClass" value="knight" /><span>Knight</span><br />
          <input type="radio" name="playerClass" value="rogue" /><span>Rogue</span><br />
          <input type="radio" name="playerClass" value="wizard" /><span>Wizard</span> <br/>
          <button type="Submit">Start!</button>
        </form>
      </div>
    )
  }
}
