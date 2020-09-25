import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/core/Button'

class App extends Component {
constructor() { 
  super();
    this.clickHandle = this.clickHandle.bind(this);
}
  state = {
    activeTab: "add",
    items: []
  }

  clickHandle() { 
    this.setState({
      Add:'Add'
    })
  }
  render() {
    return (
      <div className="App btn-group">
        <Button onClick={this.state.activeTab}><Add /></Button>
        <Button><List /></Button>
        <Button><Pay /></Button>
      </div>

    );
  }
}

export default App;
