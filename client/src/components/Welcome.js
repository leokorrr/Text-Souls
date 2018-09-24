import React, { Component } from 'react'
import '../static/css/welcome.css'

export default class Welcome extends Component {
  render() {
    return (
      <div className="welcome-flex-ctn">
        <div>
            <h1>Text Souls</h1>
            <div className="welcome-btn-ctn">
                <button>LogIn</button>
                <button>Sign up</button>
            </div>
        </div>
      </div>
    )
  }
}
