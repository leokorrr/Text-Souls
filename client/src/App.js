import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Registration from './components/Registration';
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/registration" component={Registration} />
          <Route exact path='/' component={Welcome}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
