import React from 'react'
import Icon from '../components/core/Icon'
import Slider from '../components/core/Slider'

class Temperature extends React.Component {
    render() {
        return (
            <div class="box col-md-2 col-6">
                <span style={{color: "yellow"}}>
                    <Icon name="wb_sunny" ></Icon>
                </span>
                <Slider
                    max={this.props.max}
                    min={this.props.min}
                    onChange={this.props.onChange}
                    value={this.props.temperature}>
                </Slider>
                { this.props.temperature}

            </div>
        );
    }
}
export default Temperature;