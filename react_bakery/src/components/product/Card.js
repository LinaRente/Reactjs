import React from 'react';
import specimen from '../../img/specimen.jpg'

class Card extends React.Component {

    state = {
        source: specimen
    }

    componentDidMount() {
        const url = `http://konexio.codiscovery.co/bakery/api/?q=${this.props.itemName}`
        fetch(url)
            .then(res => res.json())
            .then(
                (json) => {
                    this.setState({
                        source: json.source
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }

            )
    }

    myfunction() {
        console.log("CLICKED");
    }

    render() {
        return (
            <div>
                <button onClick={() => this.props.onClickFn(this.props.itemName, this.props.price)}><img src={this.state.source} alt='croissant' onClick={this.myfunction} /></button>
            </div>
        )
    }
}
export default Card;