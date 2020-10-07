import React from 'react';

// let pokemon = json.tid
//           .map(function (elem) {
//             return elem.type.name;
//           })

class Card extends React.Component {
    render() {
        return (
            <div className="Card">
                <h1>Pokedex</h1>
                <div className="d-flex justify-content-around">
                    <img src={this.props.source} alt='pokemon' width='300' />
                    <div>
                        <p>Name : {this.props.name}</p>
                        <p>Height : {this.props.height}</p>
                        <p>Weight : {this.props.weight}</p>
                        <p>Type : {this.props.type}</p>
                    </div>
                </div>
            </div>

        )
    }
}
export default Card;