import React from "react"

class Card extends React.Component {

    render() {

        return (
            <div>
                <p>Name : {this.props.name}</p>
                <p>Capitale : {this.props.capital}</p>
                <p>Population : {this.props.population}</p>
                <p>Region : {this.props.region}</p>
                <img src={this.props.flag} alt='france'></img>
            </div>
        )
    }
}
export default Card;