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

    this.addItem = this.addItem.bind(this)

    this.state = {
      activeTab: "add",
      items: [],
    }
  }

  onClickTab(activeTab) {
    this.setState({ activeTab })
    // console.log(this.state)
  }

  addItem(input, price) {

    let newItem = {
      input: input,
      price: price
    }

    let allItems = this.state.items;

    allItems.push(newItem)
    this.setState({
      items: allItems
    })
    // console.log(this.state.items);
  }

  render() {
    return (
      <div className='container-sm App'>
        <h1 className='title'>Bakery</h1>
        <div className="Add btn-group">
          <Button isSelected={this.state.activeTab === 'add'} onClick={this.onClickTab.bind(this, 'add')} > Add </Button>
          <Button isSelected={this.state.activeTab === 'list'} onClick={this.onClickTab.bind(this, 'list')}> List </Button>
          <Button isSelected={this.state.activeTab === 'pay'} onClick={this.onClickTab.bind(this, 'pay')}> Pay </Button>
        </div>

        {this.state.activeTab === 'add' && <Add min={min} max={max} callback={this.addItem} />}
        {this.state.activeTab === 'list' && <List items={this.state.items} fn={this.props.submitForm}/>}
        {this.state.activeTab === 'pay' && <Pay items={this.state.items}/>}

      </div>
    )
  }
}
export default App;