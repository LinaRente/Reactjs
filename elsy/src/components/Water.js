import React from 'react';
import Icon from './core/Icon'


class Water extends React.Component { 
    render() {
        return (
            <div class="box col-md-2 col-6">
                <span style={{color : "blue"}}>
                    <Icon name='local_drink'></Icon>
                </span>
                <p>{ this.props.water}</p>
                
            </div>
        )
    }
}
export default Water;