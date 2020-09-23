import React from 'react';
import Icon from '../components/core/Icon'
import Slider from '../components/core/Slider'

class Person extends React.Component {
    render() {
        return (
            <div class='box col-md-2 col-6'  >
                <span style={{ color: 'black' }}>
                    <Icon name='directions_walk'></Icon>
                </span>
                <Slider
                    min={this.props.min}
                    max={this.props.max}
                    onChange={this.props.onChange}
                    value={this.props.steps}>
                </Slider>
                {this.props.steps}
            </div>
        );
    }
}
export default Person;