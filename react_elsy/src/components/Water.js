import React from 'react';
import Icon from './core/Icon'


class Water extends React.Component { 
    render() {
        return (
            <div class="box col-md-2 col-6">
                <span style={{color : "#3A85FF"}}>
                    <Icon name='local_drink'></Icon>
                </span>
                <p>{this.props.water}L</p>
                
            </div>
        )
    }
}
export default Water;