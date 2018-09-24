import React, { Component } from 'react';
import '../static/css/welcome.css'

export default class Welcome extends Component {
  render() {
    return (
      <div className="welcome-flex-ctn">
        <div>
            <h1 className="welcome-header">Text Souls</h1>
            <div className="welcome-btn-ctn">
            <a href="/registration" className="welcome-link">
              <button className="welcome-btn">SignUp</button>
            </a>
            <a href="/login" className="welcome-link">
              <button className="welcome-btn">LogIn</button>
            </a>  
            </div>
        </div>
      </div>
    )
  }
}
