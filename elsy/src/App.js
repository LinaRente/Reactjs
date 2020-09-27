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
    // this.calculateWater = this.calculateWater.bind(this)

    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000
    }
  }

  onHeartChange(val) {
    let newWater = this.calculateWater(this.state);

    this.setState({
      heart: val,
      water: newWater
    })
  }

  onStepsChange(val) {
    let newWater = this.calculateWater(this.state);

    this.setState({
      steps: val,
      water: newWater
    })
  }

  onTemperatureChange(val) {
    let newWater = this.calculateWater(this.state);

    this.setState({
      temperature: val,
      water: newWater
    })
  }

  calculateWater(obj) {
  
    let liters = 1.5

    if (obj.temperature > 20) { 
      let temps = obj.temperature - 20
      liters += temps * 0.02
    }

    if (obj.heart > 120) { 
       let rate = obj.heart - 120
       liters += rate * 0.0008
    }

    if (obj.steps > 10000) { 
      let personSteps = obj.steps - 10000
      liters += personSteps * 0.00002
    }
    return Math.round(liters * 100)/100;
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