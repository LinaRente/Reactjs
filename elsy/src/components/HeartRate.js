import React, { Component } from 'react';

class Person extends React.Component {
    render() {
        return (
            <div class='box col-md-2 col-6' >
                <span class="material-icons" style={{fontSize:100, color: 'red'}}>
                    favorite
                </span>
                <p>Heart Rate: {this.props.heart}</p>
            </div>
        );
    }
}
export default Person;