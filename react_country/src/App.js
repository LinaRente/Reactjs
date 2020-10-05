import React, { Component } from 'react';
import './css/bootstrap.min.css'
import './App.css';
import './components/Button'
import Button from './components/Button';
import Card from './components/Card';
class App extends Component {

  state = {
    name: '',
    capital: '',
    flag: '',
    population: 0,
    region: ''
  }

  clickCountry() {
    const url = 'https://restcountries.eu/rest/v2/name/france';
    fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        this.setState({
          name: json[0].name,
          capital: json[0].capital,
          flag: json[0].flag,
          population: json[0].population,
          region: json[0].region
        })
      });
  }

  // clickBrazil() {
  //   fetch('https://restcountries.eu/rest/v2/name/brazil')
  //     .then(res => res.json())
  //     .then(json => {
  //       // console.log(json)
  //       this.setState({
  //         name: json[0].name,
  //         capital: json[0].capital,
  //         flag: json[0].flag,
  //         population: json[0].population,
  //         region: json[0].region
  //       })
  //     })
  // }

  // clickCroatia() {
  //   fetch('https://restcountries.eu/rest/v2/name/croatia')
  //     .then(res => res.json())
  //     .then(json => {
  //       this.setState({
  //         name: json[0].name,
  //         capital: json[0].capital,
  //         flag: json[0].flag,
  //         population: json[0].population,
  //         region: json[0].region
  //       })
  //     })

  // }

  render() {
    return (
      <div className="App">

        <Button onClick={this.clickCountry.bind(this, 'Send')}>France</Button>
        <Button onClick={this.clickCountry.bind(this, 'brazil')}>Brazil</Button>
        <Button onClick={this.clickCountry.bind(this, 'croatia')}>Croatia</Button>
        
        <Card><p>Name : {this.state.name}</p>
          <p>Capitale : {this.state.capital}</p>
          <p>Population : {this.state.population}</p>
          <p>Region : {this.state.region}</p>
          <img src={this.state.flag} alt='france'></img>
        </Card>

      </div>
    );
  }
}

export default App;
