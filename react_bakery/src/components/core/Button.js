import React from 'react';


class Button extends React.Component {
    render() {
        return (
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <button className={this.props.isSelected.toString() ? '  btn btn-outline-primary btn-lg': ' btn btn-light ' } onClick={this.props.onClick}>
                    {this.props.children}
                    {this.props.isSelected}
                </button>
            </div>
        );
    }
}
export default Button;