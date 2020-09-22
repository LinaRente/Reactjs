import React from 'react';
import Counter from './components/Counter'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
    }
    state = {

        count: 1
    }

    incrementCount() {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrementCount() {
        this.setState({
            count: Math.max(this.state.count - 1,1)
        })
    }
    render() {
        return (
            <div className='App'>
                <Counter count={this.state.count}
                    incrementFn={this.incrementCount}
                    decrementFn={this.decrementCount}>
                </Counter>
            </div>
        )
    }
}
export default App;