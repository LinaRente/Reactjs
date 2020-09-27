import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/core/Button'


const min = 1;
const max = 10;


class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      activeTab: "",
      items: [],
    }
  }
  onClickTab(activeTab) {
    this.setState({ activeTab })
  }
  render() {
    return (
      <div>

        <div className="App btn-group">
          <Button onClick={this.onClickTab.bind(this, 'add')}/*min={min} max={max}*/> Add </Button>
          <Button onClick={this.onClickTab.bind(this, 'list')}> List </Button>
          <Button onClick={this.onClickTab.bind(this, 'pay')}> Pay </Button>
        </div>

        {this.state.activeTab === 'add' && <Add />}
        {this.state.activeTab === 'list' && <List />}
        {this.state.activeTab === 'pay' && <Pay />}

      </div>
    )
  }
}
export default App;