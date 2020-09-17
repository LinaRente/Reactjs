import React from 'react';
import Icon from './core/Icon';

class Person extends React.Component {
    render() {
        return (
            <div class='box col-md-2 col-6' >
                <span style={{ color: 'red' }}>
                    <Icon name='favorite' style={{ color: 'red' }}></Icon>
                </span>
                <p>Heart Rate: {this.props.heart}</p>
            </div>
        );
    }
}
export default Person;