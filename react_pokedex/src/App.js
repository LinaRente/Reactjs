import React, { Component } from 'react';
import './css/bootstrap.min.css'
import './App.css';
import Card from './components/Card'
import Button from './components/Button'

class App extends Component {

  state = {
    name: '',
    height: '',
    weight: '',
    type: '',
    img: ''
  }

  clickPokemon() {
    const url = "https://pokeapi.co/api/v2/pokemon/1"
    fetch(url)
      .then(res => res.json())
      .then(json => {
        // console.log(json.name)
        let myTypes = json.types.map(function (elem) {
          return elem.type.name;
        }).join(', ')

        this.setState({
          name: json.name,
          height: json.height,
          weight: json.weight,
          type: myTypes
        })
      })
  }

  render() {
    return (
      <div>
        <div className="App jumbotron dark">
          <h1>Pokedex</h1>
          <Card
            name={this.state.name}
            height={this.state.height}
            weight={this.state.weight}
            type={this.state.type}
            img={this.state.img}
          ></Card>
        </div>
        <div>
          <Button onClick={this.clickPokemon.bind(this, 'bulbasaur')}></Button>

        </div>
      </div>
    );
  }
}

export default App;
