import React, { Component } from 'react';
import Icon from './core/Icon';


class Person extends React.Component {
    render() {
        return (
            <div class='box col-md-2 col-6'  >
                <span style={{ color: 'black' }}>
                    <Icon name='directions_walk'></Icon>
                </span>

            </div>
        );
    }
}
export default Person;