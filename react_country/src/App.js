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

  componentDidMount() {
    this.clickCountry('france');
  }

  clickCountry(country) {
    const url = `https://restcountries.eu/rest/v2/name/${country}`;
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

        <Button onClick={this.clickCountry.bind(this, 'france')}>France</Button>
        <Button onClick={this.clickCountry.bind(this, 'brazil')}>Brazil</Button>
        <Button onClick={this.clickCountry.bind(this, 'croatia')}>Croatia</Button>

        <Card name={this.state.name}
          capitale={this.state.capital}
          population={this.state.population}
          region={this.state.region}
          flag={this.state.flag}></Card>
      </div>
    );
  }
}

export default App;