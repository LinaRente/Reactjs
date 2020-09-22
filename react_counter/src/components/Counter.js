import React from 'react';

class Counter extends React.Component {
    render() {
        return (
            <div>
                <h1>Counter</h1>
                <h2>{this.props.count}</h2>
                <button className='btn btn-green' onClick={this.props.incrementFn}> + </button>
                <button className='btn btn-red' onClick={this.props.decrementFn}>  -  </button>
            </div>
        )
    }
}
export default Counter