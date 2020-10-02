import React from 'react';
import specimen from '../../img/specimen.jpg'

class Card extends React.Component {

    state = {
        source: specimen
    }

    componentDidMount() {
        fetch("http://konexio.codiscovery.co/bakery/api/?q=croissant")
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
                <button><img src={this.state.source} alt='croissant' onClick={this.myfunction}/></button>
            </div>
        )
    }
}
export default Card;