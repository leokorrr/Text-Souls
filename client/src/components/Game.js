import React, { Component } from 'react'

export default class Game extends Component {

  render() {
    return (
      <div>
        <h1>Welcome to Text Souls!</h1>
        <button onClick={this.props.getPlayer}>Start!</button>
      </div>
    )
  }
}
