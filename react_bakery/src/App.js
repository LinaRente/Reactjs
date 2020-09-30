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
      activeTab: "add",
      items: [],
    }
  }

  onClickTab(activeTab) {
    this.setState({ activeTab })
  }

  addItem(price, input) {

    let newItem = {
      price: price,
      input: input
    }

    let allItems = this.state.items;
    allItems.push(newItem)
    this.setState({
      items: allItems
    })
    console.log();
  }

  render() {
    return (
      <div>

        <div className="App btn-group">
          <Button onClick={this.onClickTab.bind(this, 'add')} > Add </Button>
          <Button onClick={this.onClickTab.bind(this, 'list')}> List </Button>
          <Button onClick={this.onClickTab.bind(this, 'pay')}> Pay </Button>
        </div>

        {this.state.activeTab === 'add' && <Add min={min} max={max} callBack={this.addItem} />}
        {this.state.activeTab === 'list' && <List />}
        {this.state.activeTab === 'pay' && <Pay />}

      </div>
    )
  }
}
export default App;