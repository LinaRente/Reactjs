import React from 'react';
import 'rc-slider/assets/index.css';


class Slider extends React.Component {
    render() {
        return (
            <div>
                <span max={this.props.max}
                    min={this.props.min}
                    value={this.props.price}
                    onChange={this.props.updatePrice}></span>
            </div>
        )
    }
}
export default Slider;