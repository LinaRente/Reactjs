import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <div>
                <button className={this.props.isSelected} onClick={this.props.onClick}>{this.props.children}
                    {this.props.isSelected}</button>
            </div>
        )
    }
}
export default Button;