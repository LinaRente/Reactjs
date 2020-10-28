import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <div>
                <h2>My name is {this.props.name}</h2>
                <h3>I'm {this.props.age} years old</h3>
                <p>{this.props.text}</p>
                <p>Languages: {this.props.languages.join(', ')}</p>   
            </div>
        );
    }
}
export default Title;