import React, { Component } from 'react';
import HomeContainer from './containers/HomeContainer';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path="/">
                <HomeContainer />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
