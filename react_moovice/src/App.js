import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Discover from './components/Discover';
import DiscoverBattle from './components/DiscoverBattle';
import Popular from './components/Popular';
import PopularBattle from './components/PopularBattle';
import MyList from './components/MyList';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav>
            <ul>
              <li><Link to="/">This week</Link></li>
              <li><Link to="/battle/">Battle</Link></li>
              <li><Link to="/popular/">Popular</Link></li>
              <li><Link to="/popular-battle/">Popular battle</Link></li>
              <li><Link to="/my-list/">My List</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <Discover />
            </Route>
            <Route exact path="/battle/">
              <DiscoverBattle />
            </Route>
            <Route exact path="/popular/">
              <Popular />
            </Route>
            <Route exact path="/popular-battle/">
              <PopularBattle />
            </Route>
            <Route exact path="/my-list/">
              <MyList />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
