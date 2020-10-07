import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <div>
                <button className={this.props.isSelected} onClick={this.props.onClick}>{this.props.children}
                    {this.props.isSelected}<img src='https://pokeres.bastionbot.org/images/pokemon/1.png' alt='Bulbasaur' width='200' /></button>
            </div>
        )
    }
}
export default Button;