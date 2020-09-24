import React from 'react';
import Person from './components/Person';
import HeartRate from './components/HeartRate';
import Temperature from './components/Temperature';
import Water from './components/Water';

const MIN_TEMPERATURE = -20
const MAX_TEMPERATURE = 40
const MIN_HEART = 80
const MAX_HEART = 180
const MIN_STEPS = 0
const MAX_STEPS = 50000

class App extends React.Component {

  constructor() {
    super();
    this.onHeartChange = this.onHeartChange.bind(this)
    this.onStepsChange = this.onStepsChange.bind(this)
    this.onTemperatureChange = this.onTemperatureChange.bind(this)
    this.calculateWater = this.calculateWater.bind(this)

    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000
    }
  }

  onHeartChange(val) {
    this.setState({
      heart: val
    })
  }
  
  onStepsChange(val) {
    this.setState({
      steps: val
    })
  }

  // onTemperatureChange(val) {f
  //   this.setState({
  //     temperature: val
  //   })
  // }

  calculateWater(val, element) {
    if (element === 'temperature') {
      console.log('calculette water temperature')
      if (element === 'temperature') {
        console.log('App#calculateWater#Temperature');
        //Si le slider Temperature est au dessus de 20°C
        if (val > 20) {
          if (this.state.heart > 120) {
            if (this.state.steps > 10000) {
              this.setState({
                water: 1.5 + ((val - 20) * 0.02) + ((this.state.heart - 120) * 0.0008) + ((this.state.steps - 10000) * 0.00002)
              })
            } else {
              this.setState({
                water: 1.5 + ((val - 20) * 0.02) + ((this.state.heart - 120) * 0.0008)
              })
            }
          } else {
            if (this.state.steps > 10000) {
              this.setState({
                water: 1.5 + ((val - 20) * 0.02) + ((this.state.steps - 10000) * 0.00002)
              })
            } else {
              this.setState({
                water: 1.5 + (val - 20) * 0.02
              })
            }
          }
        } else {
          //Si le slider est en dessous de 20 °C
          if (this.state.heart > 120) {
            if (this.state.steps > 10000) {
              this.setState({
                water: 1.5 + ((this.state.heart - 120) * 0.0008) + ((this.state.steps - 10000) * 0.00002)
              })
            } else {
              this.setState({
                water: 1.5 + ((this.state.heart - 120) * 0.0008)
              })
            }
          } else {
            if (this.state.steps > 10000) {
              this.setState({
                water: 1.5 + ((this.state.steps - 10000) * 0.00002)
              })
            } else {
              this.setState({
                water: 1.5
              })
            }
          }
        }
      } //if (element === 'temperature')
    } if (element === 'steps') {
      console.log('calculette water step')
    }
    if (element === 'heart') {
      console.log('calculette water heart')
    }
  }

  onTemperatureChange(val) { // methode pour changer la valeur de la temperature
    this.calculateWater(val, 'temperature')
    this.setState({
      temperature: val,
    })
  }


  render() {
    return (
      <div container-fluid>
        <Water
          water={this.state.water}
          onChange={this.calculateWater}>
        </Water>

        <Person
          steps={this.state.steps}
          onChange={this.onStepsChange}
          max={MAX_STEPS}
          min={MIN_STEPS}></Person>

        <HeartRate
          heart={this.state.heart}
          onChange={this.onHeartChange}
          max={MAX_HEART}
          min={MIN_HEART}></HeartRate>

        <Temperature
          temperature={this.state.temperature}
          onChange={this.onTemperatureChange}
          max={MAX_TEMPERATURE}
          min={MIN_TEMPERATURE}>
        </Temperature>
      </div>
    );
  }
}
export default App;