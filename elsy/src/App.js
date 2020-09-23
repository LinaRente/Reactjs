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
  }

  state = {
    water: 0,
    heart: 120,
    temperature: -10,
    steps: 3000
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

  onTemperatureChange(val) {
    this.setState({
      temperature: val
    })
  }

  calculateWater(val) {
    this.setState({
      water: val
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