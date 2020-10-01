import React, { Component } from 'react';
import './css/bootstrap.min.css'
import './App.css';

class App extends Component {

  state = { 
    name:'',
    capital: '',
    flag: '',
    population:0,
    region: ''
  }

  render() {
    return (
      <div className="App">
        {this.state.name}
        {this.state.capital}
        {this.state.flag}
        {this.state.region}
      </div>
    );
  }
}

export default App;
