import React from "react"

class Card extends React.Component {

    render() {

        return (
            <div>
                <p>name:{this.props.name}</p>
                <p>capitale:{this.props.capital}</p>
                <p>population:{this.props.population}</p>
                <p>region:{this.props.region}</p>
                <img src={this.props.flag} alt='france'/>
            </div>
        )
    }
}
export default Card;