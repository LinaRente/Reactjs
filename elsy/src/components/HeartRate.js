import React from 'react';
import Icon from '../components/core/Icon'
import Slider from '../components/core/Slider'

class HeartRate extends React.Component {
    render() {
        return (
            <div class='box col-md-2 col-6' >
                <span style={{ color: 'red' }}>
                    <Icon name='favorite'></Icon>
                </span>
                <Slider
                    min={this.props.min}
                    max={this.props.max}
                    onChange={this.props.onChange}
                    value={this.props.heart}>
                </Slider>
                {this.props.heart}
            </div>
        );
    }
}
export default HeartRate;