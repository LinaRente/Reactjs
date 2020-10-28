import React from 'react';

class Counter extends React.Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <p>
                    <h1 style={{ fontSize: '100px' }}>Counter 1</h1>
                    <h2 style={{ fontSize: '50px' }}>{this.props.count}</h2>
                    <button onClick={this.props.incrementFn} style={{ border: '3px solid', width: '200px', height: '50px', background: 'green' }}> + </button>
                    <button onClick={this.props.decrementFn} style={{ border: '3px solid', width: '200px', height: '50px', background: 'red' }}>  -  </button>
                </p>

                <p>
                    <h1 style={{ fontSize: '100px' }}>Counter 2</h1>
                    <h2 style={{ fontSize: '50px' }}>{this.props.count}</h2>
                    <button onClick={this.props.incrementFn} style={{ border: '3px solid', width: '200px', height: '50px', background: 'green' }}> + </button>
                    <button onClick={this.props.decrementFn} style={{ border: '3px solid', width: '200px', height: '50px', background: 'red' }}>  -  </button>
                </p>


            </div>
        )
    }
}
export default Counter